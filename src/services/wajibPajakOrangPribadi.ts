import { PrismaClient } from '@prisma/client';

import { WajibPajakOrangPribadi } from '../entities/WajibPajakOrangPribadi';
import { createWajibPajakOrangPribadiSchema } from '../validation/wajibPajakOrangPribadiValidation';

const prisma = new PrismaClient();

type CreateWajibPajakOrangPribadiParam = Omit<
  WajibPajakOrangPribadi,
  'password'
>;

export const createWajibPajakOrangPribadi = async (
  data: CreateWajibPajakOrangPribadiParam
) => {
  const createWajibPajakOrangPribadiMap =
    createWajibPajakOrangPribadiSchema.parse({
      nama: data.nama,
      email: data.email,
      kewarganegaraan: data.kewarganegaraan,
      negara: data.negara,
      idOrangPribadi: data.id_orang_pribadi,
      namaKtp: data.nama_ktp,
      npwp: data.npwp,
      namaNpwp: data.nama_npwp,
      kotaNpwp: data.kota_npwp,
      namaBank: data.nama_bank,
      noRekening: data.no_rekening,
      namaRekening: data.nama_rekening,
      nip: data.nip,
      statusPegawai: data.status_pegawai,
      fileFotoNpwp: data.file_foto_npwp,
      fileFotoIdOrangPribadi: data.file_foto_id_orang_pribadi,
      fileFotoBuktiRekening: data.file_foto_bukti_rekening,
      statusWpop: true,
    });

  const createWajibPajakOrangPribadi =
    await prisma.wajibPajakOrangPribadi.create({
      data: createWajibPajakOrangPribadiMap,
    });

  return {
    nama: createWajibPajakOrangPribadi.nama,
    email: createWajibPajakOrangPribadi.email,
    kewarganegaraan: createWajibPajakOrangPribadi.kewarganegaraan,
    negara: createWajibPajakOrangPribadi.negara,
    id_orang_pribadi: createWajibPajakOrangPribadi.idOrangPribadi,
    nama_ktp: createWajibPajakOrangPribadi.namaKtp,
    npwp: createWajibPajakOrangPribadi.npwp,
    nama_npwp: createWajibPajakOrangPribadi.namaNpwp,
    kota_npwp: createWajibPajakOrangPribadi.kotaNpwp,
    nama_bank: createWajibPajakOrangPribadi.namaBank,
    no_rekening: createWajibPajakOrangPribadi.noRekening,
    nama_rekening: createWajibPajakOrangPribadi.namaRekening,
    nip: createWajibPajakOrangPribadi.nip,
    status_pegawai: createWajibPajakOrangPribadi.statusPegawai,
    file_foto_npwp: createWajibPajakOrangPribadi.fileFotoNpwp,
    file_foto_id_orang_pribadi:
      createWajibPajakOrangPribadi.fileFotoIdOrangPribadi,
    fileFotoBuktiRekening: createWajibPajakOrangPribadi.fileFotoBuktiRekening,
  };
};
