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
  enum Kewarganegaraan {
    WNI,
    WNA,
  }

  const createWajibPajakOrangPribadiValidation =
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
      statusWpop: data.status_wpop,
    });

  const createWajibPajakOrangPribadiMap = {
    nama: createWajibPajakOrangPribadiValidation.nama,
    email: createWajibPajakOrangPribadiValidation.email,
    kewarganegaraan: createWajibPajakOrangPribadiValidation.kewarganegaraan,
    negara: createWajibPajakOrangPribadiValidation.negara,
    id_orang_pribadi: createWajibPajakOrangPribadiValidation.id_orang_pribadi,
    nama_ktp: createWajibPajakOrangPribadiValidation.nama_ktp,
    npwp: createWajibPajakOrangPribadiValidation.npwp,
    nama_npwp: createWajibPajakOrangPribadiValidation.nama_npwp,
    kota_npwp: createWajibPajakOrangPribadiValidation.kota_npwp,
    nama_bank: createWajibPajakOrangPribadiValidation.nama_bank,
    no_rekening: createWajibPajakOrangPribadiValidation.no_rekening,
    nama_rekening: createWajibPajakOrangPribadiValidation.nama_rekening,
    nip: createWajibPajakOrangPribadiValidation.nip,
    status_pegawai: createWajibPajakOrangPribadiValidation.status_pegawai,
    file_foto_npwp: createWajibPajakOrangPribadiValidation.file_foto_npwp,
    file_foto_id_orang_pribadi:
      createWajibPajakOrangPribadiValidation.file_foto_id_orang_pribadi,
    file_foto_bukti_rekening:
      createWajibPajakOrangPribadiValidation.file_foto_bukti_rekening,
    status_wpop: createWajibPajakOrangPribadiValidation.status_wpop,
  };

  const createWajibPajakOrangPribadi =
    await prisma.wajibPajakOrangPribadi.create({
      data: {
        nama: createWajibPajakOrangPribadiMap.nama,
        email: createWajibPajakOrangPribadiMap.email,
        kewarganegaraan: createWajibPajakOrangPribadiMap.kewarganegaraan,
        negara: createWajibPajakOrangPribadiMap.negara,
        idOrangPribadi: createWajibPajakOrangPribadiMap.id_orang_pribadi,
        namaKtp: createWajibPajakOrangPribadiMap.nama_ktp,
        npwp: createWajibPajakOrangPribadiMap.npwp,
        namaNpwp: createWajibPajakOrangPribadiMap.nama_npwp,
        kotaNpwp: createWajibPajakOrangPribadiMap.kota_npwp,
        namaBank: createWajibPajakOrangPribadiMap.nama_bank,
        noRekening: createWajibPajakOrangPribadiMap.no_rekening,
        namaRekening: createWajibPajakOrangPribadiMap.nama_rekening,
        nip: createWajibPajakOrangPribadiMap.nip,
        statusPegawai: createWajibPajakOrangPribadiMap.status_pegawai,
        fileFotoNpwp: createWajibPajakOrangPribadiMap.file_foto_npwp,
        fileFotoIdOrangPribadi:
          createWajibPajakOrangPribadiMap.file_foto_id_orang_pribadi,
        fileFotoBuktiRekening:
          createWajibPajakOrangPribadiMap.file_foto_bukti_rekening,
        statusWpop: createWajibPajakOrangPribadiMap.status_wpop,
      },
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
    file_foto_bukti_rekening:
      createWajibPajakOrangPribadi.fileFotoBuktiRekening,
  };
};
