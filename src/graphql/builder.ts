// graphql/builder.ts

// 1.
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import type PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from '../lib/prisma';
import RelayPlugin from '@pothos/plugin-relay';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
}>({
  plugins: [PrismaPlugin, RelayPlugin],
  prisma: {
    client: prisma,
  },
  relayOptions: {},
});

builder.queryType({
  fields: t => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});
