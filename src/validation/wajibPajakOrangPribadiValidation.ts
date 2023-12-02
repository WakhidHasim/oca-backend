import { object, z } from 'zod';

export const createWajibPajakOrangPribadiSchema = z.object({
  nama: z.string().max(100),
  email: z.string().max(255),
  password: z.string().max(255).optional(),
  kewarganegaraan: z.string().max(5),
  id_orang_pribadi: z.string().max(50),
  negara: z.string().max(50),
  nama_ktp: z.string().max(100),
  npwp: z.number().max(50).optional(),
  nama_npwp: z.string().max(100).optional(),
  kota_npwp: z.string().max(255).optional(),
  nama_bank: z.string().max(100).optional(),
  no_rekening: z.number().max(50).optional(),
  nama_rekening: z.string().max(100).optional(),
  nip: z.string().max(20).optional(),
  status_pegawai: z.string().max(20),
  file_foto_npwp: z.string().max(255).optional(),
  file_foto_id_orang_pribadi: z.string().max(255),
  file_foto_bukti_rekening: z.string().max(255).optional(),
  status_wpop: z.boolean().default(false),
});
