import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createKegiatanBadan = async (data: any) => {
  return prisma.kegiatanPenghasilanBadan.create({
    data,
  });
};

export const getKegiatanBadanById = async (id: string) => {
  return prisma.kegiatanPenghasilanBadan.findUnique({
    where: { id },
  });
};

export const updateKegiatanBadan = async (id: string, data: any) => {
  return prisma.kegiatanPenghasilanBadan.update({
    where: { id },
    data,
  });
};

export const deleteKegiatanBadan = async (id: string) => {
  return prisma.kegiatanPenghasilanBadan.delete({
    where: { id },
  });
};
