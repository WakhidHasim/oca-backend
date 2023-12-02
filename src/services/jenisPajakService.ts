import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type GetJenisPajakParam = {
  id?: string;
  nama_pajak?: string;
  deskripsi_pajak?: string;
  tata_cara_hitung_pajak?: string;
};

type CreateJenisPajakParam = {
  nama_pajak: string;
  deskripsi_pajak: string;
  tata_cara_hitung_pajak: string;
};

export const createJenisPajak = async (data: CreateJenisPajakParam) => {
  const createJenisPajakMap = {
    namaPajak: data.nama_pajak,
    deskripsiPajak: data.deskripsi_pajak,
    tataCaraHitungPajak: data.tata_cara_hitung_pajak,
  };

  const createdJenisPajak = await prisma.jenisPajak.create({
    data: createJenisPajakMap,
  });

  return {
    id: createdJenisPajak.id,
    nama_pajak: createdJenisPajak.namaPajak,
    deskripsi_pajak: createdJenisPajak.deskripsiPajak,
    tata_cara_hitung_pajak: createdJenisPajak.tataCaraHitungPajak,
  };
};

export const getJenisPajakList = async (data: GetJenisPajakParam) => {
  const getJenisPajakListMap = {
    id: data?.id,
    namaPajak: data?.nama_pajak,
    deskripsiPajak: data?.deskripsi_pajak,
    tataCaraHitungPajak: data?.tata_cara_hitung_pajak,
  };

  return prisma.jenisPajak.findMany({
    where: getJenisPajakListMap,
  });
};

export const getJenisPajakById = async (id: string) => {
  const jenisPajak = await prisma.jenisPajak.findUnique({
    where: { id },
  });

  if (!jenisPajak) {
    return null;
  }

  return {
    id: jenisPajak.id,
    nama_pajak: jenisPajak.namaPajak,
    deskripsi_pajak: jenisPajak.deskripsiPajak,
    tata_cara_hitung_pajak: jenisPajak.tataCaraHitungPajak,
  };
};

export const updateJenisPajak = async (
  id: string,
  data: CreateJenisPajakParam
) => {
  const updatedJenisPajak = await prisma.jenisPajak.update({
    where: { id: id },
    data: {
      namaPajak: data.nama_pajak,
      deskripsiPajak: data.deskripsi_pajak,
      tataCaraHitungPajak: data.tata_cara_hitung_pajak,
    },
  });

  if (!updatedJenisPajak) {
    return null;
  }

  return {
    id: updatedJenisPajak.id,
    nama_pajak: updatedJenisPajak.namaPajak,
    deskripsi_pajak: updatedJenisPajak.deskripsiPajak,
    tata_cara_hitung_pajak: updatedJenisPajak.tataCaraHitungPajak,
  };
};

export const deleteJenisPajak = async (id: string) => {
  const deletedJenisPajak = await prisma.jenisPajak.delete({
    where: { id: id },
  });

  return !!deletedJenisPajak;
};
