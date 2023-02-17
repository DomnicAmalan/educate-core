// graphql/schema.ts

import { builder } from './builder';
import '@app/graphql/types/User';
export const schema = builder.toSchema();
