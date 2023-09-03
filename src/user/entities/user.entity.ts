import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class User {
  async create(data: any) {
    return await prisma.user.create({
      data,
    });
  }

  async findAll() {
    return await prisma.user.findMany();
  }

  async findOne(id: number) {
    return await prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: number, data) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}
