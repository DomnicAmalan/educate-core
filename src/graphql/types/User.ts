// /graphql/types/Link.ts
import { builder } from '../builder';
import { Role } from './Role';

builder.prismaObject('User', {
  fields: t => ({
    email: t.exposeString('email', { nullable: true }),
    id: t.exposeID('id'),
    image: t.exposeString('image', { nullable: true }),
    role: t.expose('role', { type: Role }),
  }),
});

builder.queryField('User', t =>
  t.prismaConnection({
    cursor: 'id',
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.user.findMany({ ...query, where: { email: query.cursor?.email } }),
    type: 'User',
  }),
);
