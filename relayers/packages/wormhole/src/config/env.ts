import { Environment } from '@wormhole-foundation/relayer-engine';

export interface Env {
  ENVIRONMENT: Environment;

  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_USERNAME: string;
  REDIS_PASSWORD: string;
  REDIS_ATTEMPTS: number;
  REDIS_NAMESPACE: string;
  REDIS_QUEUE: string;

  SPY_URL: string;
}
