import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'testemail@gmail.com',
      image: 'https://sdsds',
      role: 'ADMIN',
    },
  });
}

main()
  .catch(() => process.exit(1))
  .finally(() => prisma.$disconnect());
