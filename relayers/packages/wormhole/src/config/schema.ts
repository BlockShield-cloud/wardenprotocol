import { JSONSchemaType, envSchema } from 'env-schema';

import { Env } from './env.js';

const schema: JSONSchemaType<Env> = {
  type: 'object',
  required: [
    'ENVIRONMENT',
    'REDIS_HOST',
    'REDIS_PORT',
    'REDIS_USERNAME',
    'REDIS_PASSWORD',
    'REDIS_ATTEMPTS',
    'REDIS_NAMESPACE',
    'REDIS_QUEUE',
    'SPY_URL',
  ],
  properties: {
    ENVIRONMENT: { type: 'string' },
    REDIS_HOST: { type: 'string' },
    REDIS_PORT: { type: 'number' },
    REDIS_USERNAME: { type: 'string' },
    REDIS_PASSWORD: { type: 'string' },
    REDIS_ATTEMPTS: { type: 'number' },
    REDIS_NAMESPACE: { type: 'string' },
    REDIS_QUEUE: { type: 'string' },
    SPY_URL: { type: 'string' },
  },
};

export const config = envSchema({
  schema,
  dotenv: true,
});
