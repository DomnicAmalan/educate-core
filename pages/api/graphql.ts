// /pages/api/graphql.ts
import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { withLogger } from '../../src/logger/AccessLogger';
import { withSession } from '../../src/lib/withSession';
import { schema } from '../../src/graphql/schema';

const yoga = createYoga<{ req: NextApiRequest; res: NextApiResponse }>({
  graphqlEndpoint: '/api/graphql',
  schema,
});

export default withLogger(withSession(yoga), __filename, ['client']);

export const config = { api: { bodyParser: false } };
