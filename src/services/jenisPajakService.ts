import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createJenisPajak = async (data: any) => {
  return prisma.jenisPajak.create({
    data,
  });
};

export const getJenisPajakList = async () => {
  return prisma.jenisPajak.findMany();
};

export const getJenisPajakById = async (id: string) => {
  return prisma.jenisPajak.findUnique({
    where: { id },
  });
};

export const updateJenisPajak = async (id: string, data: any) => {
  return prisma.jenisPajak.update({
    where: { id },
    data,
  });
};

export const deleteJenisPajak = async (id: string) => {
  return prisma.jenisPajak.delete({
    where: { id },
  });
};
