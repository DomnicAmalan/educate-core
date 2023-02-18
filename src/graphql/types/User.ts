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

builder.queryField('getAllUsers', t =>
  t.prismaField({
    args: {
      email: t.arg({ type: 'String' }),
    },
    resolve: (query, _root, _args, _ctx, _info) => {
      return prisma.user.findMany({ ...query, where: { email: _args.email } });
    },
    type: ['User'],
  }),
);

builder.queryField('getAUserByEmail', t =>
  t.prismaField({
    args: {
      email: t.arg({ type: 'String' }),
    },
    resolve: (query, _root, _args, _ctx, _info) => {
      return prisma.user.findUniqueOrThrow({
        ...query,
        where: { email: _args.email },
      });
    },
    type: 'User',
  }),
);
