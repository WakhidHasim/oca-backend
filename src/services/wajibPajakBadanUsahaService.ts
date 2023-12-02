import { PrismaClient } from '@prisma/client';
import { WajibPajakBadanUsaha } from '../entities/WajibPajakBadanUsaha';

const prisma = new PrismaClient();

type GetWajibPajakBadanUsahaParam = {
  id?: string;
  nama_badan?: string;
  email?: string;
  npwp?: number;
  nama_npwp?: string;
  kota_npwp?: string;
  nama_bank?: string;
  no_rekening?: number;
  nama_rekening?: string;
  narahubung?: string;
  skb_pph23?: string;
  masa_berlaku_bebas_pph23?: number;
  file_foto_identitas_badan?: string;
  file_foto_bukti_rekening?: string;
  file_foto_npwp?: string;
  file_surat_bebas_pph23?: string;
  status_pkp?: string;
};

type CreateWajibPajakBadanUsahaParam = WajibPajakBadanUsaha;
type UpdatedWajibPajakBadanUsahaParam = WajibPajakBadanUsaha;

export const createWajibPajakBadanUsaha = async (
  data: CreateWajibPajakBadanUsahaParam
) => {
  const createWajibPajakBadanUsahaMap = {
    namaBadan: data.nama_badan,
    email: data.email,
    npwp: data.npwp,
    namaNpwp: data.nama_npwp,
    kotaNpwp: data.kota_npwp,
    namaBank: data.nama_bank,
    noRekening: data.no_rekening,
    namaRekening: data.nama_rekening,
    narahubung: data.narahubung,
    skbPph23: data.skb_pph23,
    masaBerlakuBebasPph23: data.masa_berlaku_bebas_pph23,
    fileFotoIdentitasBadan: data.file_foto_identitas_badan,
    fileFotoBuktiRekening: data.file_foto_bukti_rekening,
    fileFotoNpwp: data.file_foto_npwp,
    fileSuratBebasPph23: data.file_surat_bebas_pph23,
    statusPkp: data.status_pkp,
  };

  const createdWajibPajakBadanUsaha = await prisma.wajibPajakBadanUsaha.create({
    data: createWajibPajakBadanUsahaMap,
  });

  return {
    nama_badan: createWajibPajakBadanUsahaMap.namaBadan,
    email: createdWajibPajakBadanUsaha.email,
    npwp: createdWajibPajakBadanUsaha.npwp,
    nama_npwp: createdWajibPajakBadanUsaha.namaNpwp,
    kota_npwp: createdWajibPajakBadanUsaha.kotaNpwp,
    nama_bank: createdWajibPajakBadanUsaha.namaBank,
    no_rekening: createdWajibPajakBadanUsaha.noRekening,
    nama_rekening: createdWajibPajakBadanUsaha.namaRekening,
    narahubung: createdWajibPajakBadanUsaha.narahubung,
    skb_pph23: createdWajibPajakBadanUsaha.skbPph23,
    masa_berlaku_bebas_pph23: createdWajibPajakBadanUsaha.masaBerlakuBebasPph23,
    file_foto_identitas_badan:
      createdWajibPajakBadanUsaha.fileFotoIdentitasBadan,
    file_foto_bukti_rekening: createdWajibPajakBadanUsaha.fileFotoBuktiRekening,
    file_foto_npwp: createdWajibPajakBadanUsaha.fileFotoNpwp,
    file_surat_bebas_pph23: createdWajibPajakBadanUsaha.fileSuratBebasPph23,
    status_pkp: createdWajibPajakBadanUsaha.statusPkp,
  };
};

export const getWajibPajakBadanUsaha = async (
  data: GetWajibPajakBadanUsahaParam
) => {
  const getWajibPajakBadanUsahaListMap = {
    id: data?.id,
    namaBadan: data?.nama_badan,
    email: data?.email,
    npwp: data?.npwp,
    namaNpwp: data?.nama_npwp,
    kotaNpwp: data?.kota_npwp,
    namaBank: data?.nama_bank,
    noRekening: data?.no_rekening,
    namaRekening: data?.nama_rekening,
    narahubung: data?.narahubung,
    skbPph23: data?.skb_pph23,
    masaBerlakuBebasPph23: data?.masa_berlaku_bebas_pph23,
    fileFotoIdentitasBadan: data?.file_foto_identitas_badan,
    fileFotoBuktiRekening: data?.file_foto_bukti_rekening,
    fileFotoNpwp: data?.file_foto_npwp,
    fileSuratBebasPph23: data?.file_surat_bebas_pph23,
    statusPkpstat: data?.status_pkp,
  };

  return prisma.wajibPajakBadanUsaha.findMany({
    where: getWajibPajakBadanUsahaListMap,
  });
};

export const updateWajibPajakBadanUsaha = async (
  id: string,
  data: UpdatedWajibPajakBadanUsahaParam
) => {
  const updatedWajibPajakBadanUsaha = await prisma.wajibPajakBadanUsaha.update({
    where: { id: id },
    data: {
      namaBadan: data?.nama_badan,
      email: data?.email,
      npwp: data?.npwp,
      namaNpwp: data?.nama_npwp,
      kotaNpwp: data?.kota_npwp,
      namaBank: data?.nama_bank,
      noRekening: data?.no_rekening,
      namaRekening: data?.nama_rekening,
      narahubung: data?.narahubung,
      skbPph23: data?.skb_pph23,
      masaBerlakuBebasPph23: data?.masa_berlaku_bebas_pph23,
      fileFotoIdentitasBadan: data?.file_foto_identitas_badan,
      fileFotoBuktiRekening: data?.file_foto_bukti_rekening,
      fileFotoNpwp: data?.file_foto_npwp,
      fileSuratBebasPph23: data?.file_surat_bebas_pph23,
      statusPkp: data?.status_pkp,
    },
  });

  if (!updatedWajibPajakBadanUsaha) {
    return null;
  }

  return {
    id: updatedWajibPajakBadanUsaha.id,
    nama_badan: updatedWajibPajakBadanUsaha.namaBadan,
    email: updatedWajibPajakBadanUsaha.email,
    npwp: updatedWajibPajakBadanUsaha.npwp,
    nama_npwp: updatedWajibPajakBadanUsaha.namaNpwp,
    kota_npwp: updatedWajibPajakBadanUsaha.kotaNpwp,
    nama_bank: updatedWajibPajakBadanUsaha.namaBank,
    no_rekening: updatedWajibPajakBadanUsaha.noRekening,
    nama_rekening: updatedWajibPajakBadanUsaha.namaRekening,
    narahubung: updatedWajibPajakBadanUsaha.narahubung,
    skb_pph23: updatedWajibPajakBadanUsaha.skbPph23,
    masa_berlaku_bebas_pph23: updatedWajibPajakBadanUsaha.masaBerlakuBebasPph23,
    file_foto_identitas_badan:
      updatedWajibPajakBadanUsaha.fileFotoIdentitasBadan,
    file_foto_bukti_rekening: updatedWajibPajakBadanUsaha.fileFotoBuktiRekening,
    file_foto_npwp: updatedWajibPajakBadanUsaha.fileFotoNpwp,
    file_surat_bebas_pph23: updatedWajibPajakBadanUsaha.fileSuratBebasPph23,
    status_pkp: updatedWajibPajakBadanUsaha.statusPkp,
  };
};

export const deleteWajibPajakBadanUsaha = async (id: string) => {
  const deletedWajibPajakBadanUsaha = await prisma.wajibPajakBadanUsaha.delete({
    where: { id: id },
  });

  return !!deletedWajibPajakBadanUsaha;
};
