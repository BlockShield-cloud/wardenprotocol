import { CHAIN_ID_SOLANA, TokenBridgePayload } from '@certusone/wormhole-sdk';
import {
  Environment,
  RedisStorage,
  RelayerApp,
  StandardRelayerContext,
  logging,
  providers,
  sourceTx,
  stagingArea,
  tokenBridgeContracts,
} from '@wormhole-foundation/relayer-engine';
import 'dotenv/config';
import winston from 'winston';

// export const WORMHOLE_CONTRACTS = CONTRACTS['TESTNET'];
// export const CORE_BRIDGE_PID = new PublicKey(WORMHOLE_CONTRACTS.solana.core);

async function feedEm(app: RelayerApp<StandardRelayerContext>) {
  // rando token transfer VAA from Sol
  setInterval(async () => {
    const tmpvaa = Buffer.from(
      'AQAAAAABAJhoIpjSRXkgBWn36i/ULs79LzTVnCusLvAvB27UO8CRB2vhOHrQweHWXnZAoUKpeIZ2VtvmLwSLMvAYa4Oy/SMBZLGAxQAAc38AATsmQJ+Kre0/XdyhhGlapqD6gpsMhcr4SFYySJbSFMqYAAAAAAAAXc8gAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYloABpuIV/6rgYT7aH9jRhjANdrEOdwa6ztVmKDwAAAAAAEAAW2a5rLTM8HWUwGlnaPu04jKXcYMsSSWWEt1y+axX9vtACC+6/ZVk+zI95lF4zZqA44cLkY+fu0ikgdvAuPVrcr6rXsiYmFzaWNfcmVjaXBpZW50Ijp7InJlY2lwaWVudCI6ImMyVnBNV1ptWkd0dGR6Sm1jbkE0TW1zM09EaDZlWGx0Ym5kNWRuSmphemRuY1hremF6Um1OMk5sIn19',
      'base64',
    );
    await app.processVaa(tmpvaa);
  }, 1000);
}

export const rootLogger = winston.createLogger({
  level: 'info',
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.splat(),
    winston.format.simple(),
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`),
  ),
});

export async function main() {
  const app = new RelayerApp<StandardRelayerContext>(Environment.TESTNET);

  const store = new RedisStorage({
    attempts: 3,
    namespace: 'artur-local',
    queueName: 'relays',
  });

  app.spy('localhost:7073');
  app.useStorage(store);
  app.logger(rootLogger);

  // middleware
  app.use(logging(rootLogger));
  app.use(providers());
  app.use(tokenBridgeContracts());
  app.use(stagingArea());
  app.use(sourceTx());

  app.chain(CHAIN_ID_SOLANA).address('DZnkkTmCiFWfYTfT41X3Rd1kDgozqzxWaHqsw6W4x2oe', async (ctx, next) => {
    ctx.logger.info(`Got a VAA: ${ctx.vaa} from with txhash: ${ctx.sourceTxHash}`);

    const { payload } = ctx.tokenBridge;

    switch (payload?.payloadType) {
      case TokenBridgePayload.Transfer:
        ctx.logger.info(
          `Processing token transfer: ${payload.tokenChain}:${payload.tokenAddress?.toString('hex')}}` +
            `, amount: ${payload.amount}, receiver: ${payload.toChain}:${payload.to?.toString('hex')}`,
        );
        break;
      case TokenBridgePayload.TransferWithPayload:
        ctx.logger.info(
          `Processing token transfer: ${payload.tokenChain}:${payload.tokenAddress?.toString('hex')}}` +
            `, amount: ${payload.amount}, receiver: ${payload.toChain}:${payload.to?.toString('hex')}` +
            `, sender: ${payload.fromAddress?.toString('hex')}` +
            `, receiver: ${payload.toChain}:${payload.to?.toString('hex')}` +
            `, payload: ${payload.tokenTransferPayload?.toString('hex')}`,
        );
        break;
    }

    await next();
  });

  app.use(async (err, ctx, next) => {
    ctx.logger.error('Error middleware triggered');

    await next();
  });

  await feedEm(app);

  await app.listen();
}

main()
  .catch((error) => console.error('Unhandled error:', error))
  .finally(() => process.exit());
