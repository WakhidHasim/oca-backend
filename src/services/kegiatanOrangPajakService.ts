import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createKegiatan = async (data: any) => {
  return prisma.kegiatanPenghasilanOrangPajak.create({
    data,
  });
};

export const getKegiatanList = async () => {
  return prisma.kegiatanPenghasilanOrangPajak.findMany();
};

export const getKegiatanById = async (id: string) => {
  return prisma.kegiatanPenghasilanOrangPajak.findUnique({
    where: { id },
  });
};

export const updateKegiatan = async (id: string, data: any) => {
  return prisma.kegiatanPenghasilanOrangPajak.update({
    where: { id },
    data,
  });
};

export const deleteKegiatan = async (id: string) => {
  return prisma.kegiatanPenghasilanOrangPajak.delete({
    where: { id },
  });
};
