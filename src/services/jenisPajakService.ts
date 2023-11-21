import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type CreateJenisPajakParam = {
  nama_pajak: string
  deskripsi_pajak: string
  tata_cara_hitung_pajak: string
}
export const createJenisPajak = async (data: CreateJenisPajakParam) => {
  // NOTE: bikin request validasi kalau keburu

  // NOTE: mapping
  const dataToBeCreated = {
    namaPajak: data.nama_pajak,
    deskripsiPajak: data.deskripsi_pajak,
    tataCaraHitungPajak: data.tata_cara_hitung_pajak
  }

  return prisma.jenisPajak.create({
    data: dataToBeCreated
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

// NOTE: kalau keburu, data ini jangan dibikin 'any' (sama aja kayak javascript nantinya)
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
