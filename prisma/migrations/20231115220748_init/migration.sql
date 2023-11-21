/*
  Warnings:

  - You are about to drop the `DetailFilePendukung` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Distrik` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InventarisasiPajak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemKegiatanPenghasilanOrangPajak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JenisPajak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kabupaten` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kampung` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KegiatanPenghasilanBadan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `KegiatanPenghasilanOrangPajak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LogKegiatanPenghasilanOrangPajak` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Negara` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pegawai` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Provinsi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WajibPajakBadanUsaha` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DetailFilePendukung";

-- DropTable
DROP TABLE "Distrik";

-- DropTable
DROP TABLE "InventarisasiPajak";

-- DropTable
DROP TABLE "ItemKegiatanPenghasilanOrangPajak";

-- DropTable
DROP TABLE "JenisPajak";

-- DropTable
DROP TABLE "Kabupaten";

-- DropTable
DROP TABLE "Kampung";

-- DropTable
DROP TABLE "KegiatanPenghasilanBadan";

-- DropTable
DROP TABLE "KegiatanPenghasilanOrangPajak";

-- DropTable
DROP TABLE "LogKegiatanPenghasilanOrangPajak";

-- DropTable
DROP TABLE "Negara";

-- DropTable
DROP TABLE "Pegawai";

-- DropTable
DROP TABLE "Provinsi";

-- DropTable
DROP TABLE "WajibPajakBadanUsaha";

-- CreateTable
CREATE TABLE "negara" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kode_negara" TEXT NOT NULL,
    "nama_negara" TEXT NOT NULL,

    CONSTRAINT "negara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "provinsi" (
    "id" UUID NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "provinsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kabupaten" (
    "id" UUID NOT NULL,
    "provinsi_id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "kabupaten_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distrik" (
    "id" UUID NOT NULL,
    "kabupaten_id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "distrik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kampung" (
    "id" UUID NOT NULL,
    "distrik_id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "kampung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jenis_pajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama_pajak" TEXT NOT NULL,
    "deskripsi_pajak" TEXT NOT NULL,
    "tata_cara_hitung_pajak" TEXT NOT NULL,

    CONSTRAINT "jenis_pajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pegawai" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nip" TEXT NOT NULL,
    "nama_pegawai" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "nama_ktp" TEXT NOT NULL,
    "npwp" INTEGER,
    "nama_wajib_pajak" TEXT NOT NULL,
    "jenis_kelamin" TEXT NOT NULL,
    "status_nikah" TEXT NOT NULL,
    "jml_tanggungan" INTEGER NOT NULL DEFAULT 0,
    "tgl_masuk" TIMESTAMP(3) NOT NULL,
    "tgl_berakhir" TIMESTAMP(3),
    "bank_transfer" TEXT NOT NULL,
    "no_rekening" INTEGER NOT NULL,
    "nama_rekening" TEXT NOT NULL,
    "status_pegawai" TEXT NOT NULL,

    CONSTRAINT "pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarif_progresif" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "lapisan" INTEGER NOT NULL,
    "batas_bawah" DOUBLE PRECISION,
    "batas_atas" DOUBLE PRECISION,
    "tarif_uuhpp" DOUBLE PRECISION NOT NULL,
    "tarif_disesuaikan" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tarif_progresif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objek_pajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "jenis_pajak_id" TEXT NOT NULL,
    "objek_pajak" TEXT NOT NULL,
    "tarif_npwp" DOUBLE PRECISION NOT NULL,
    "tarif_non_npwp" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "objek_pajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "satuan_kerja" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idl" TEXT NOT NULL,
    "nama_satuan_kerja" TEXT NOT NULL,
    "akronim" TEXT NOT NULL,

    CONSTRAINT "satuan_kerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agent" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pegawai_id" TEXT NOT NULL,
    "satuan_kerja_id" TEXT NOT NULL,
    "status_agent" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "agent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pengelola" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pegawai_id" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "status_pengelola" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pengelola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pengajuan_anggaran" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "satuan_kerja_id" TEXT NOT NULL,
    "no_pengajuan" INTEGER NOT NULL,
    "nama_kegiatan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pengajuan_anggaran_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tarif_progresif_pegawai_tetap" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "pegawai_id" TEXT NOT NULL,
    "tarif_progresif_id" TEXT NOT NULL,
    "nominal_pkp" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tarif_progresif_pegawai_tetap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kode_bank" INTEGER NOT NULL,
    "nama_bank" TEXT NOT NULL,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wajib_pajak_orang_pribadi" (
    "id" UUID NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "kewarganegaraan" TEXT NOT NULL,
    "negara" TEXT NOT NULL,
    "id_orang_pribadi" INTEGER NOT NULL,
    "nama_ktp" TEXT NOT NULL,
    "npwp" INTEGER,
    "nama_npwp" TEXT NOT NULL,
    "kota_npwp" TEXT NOT NULL,
    "nama_bank" TEXT NOT NULL,
    "no_rekening" INTEGER NOT NULL,
    "nama_rekening" TEXT NOT NULL,
    "nip" TEXT NOT NULL,
    "status_pegawai" TEXT NOT NULL,
    "file_foto_npwp" TEXT NOT NULL,
    "file_foto_id_orang_pribadi" TEXT NOT NULL,
    "file_foto_bukti_rekening" TEXT NOT NULL,
    "status_wpop" TEXT NOT NULL,

    CONSTRAINT "wajib_pajak_orang_pribadi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wajib_pajak_badan_usaha" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nama_badan" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "npwp" INTEGER,
    "nama_npwp" TEXT NOT NULL,
    "kota_npwp" TEXT NOT NULL,
    "nama_bank" TEXT NOT NULL,
    "no_rekening" INTEGER NOT NULL,
    "nama_rekening" TEXT NOT NULL,
    "narahubung" TEXT NOT NULL,
    "skb_pph23" TEXT NOT NULL,
    "masa_berlaku_bebas_pph23" INTEGER NOT NULL,
    "file_foto_identitas_badan" TEXT NOT NULL,
    "file_foto_bukti_rekening" TEXT NOT NULL,
    "file_foto_npwp" TEXT NOT NULL,
    "file_surat_bebas_pph23" TEXT NOT NULL,
    "status_pkp" TEXT NOT NULL,

    CONSTRAINT "wajib_pajak_badan_usaha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kegiatan_penghasilan_orang_pajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_kegiatan_anggaran" TEXT NOT NULL,
    "uraian_kegiatan" TEXT NOT NULL,
    "tanggal_penghasilan" TIMESTAMP(3) NOT NULL,
    "jenis_pajak_id" TEXT NOT NULL,
    "tanggal_pemotongan_pph" TIMESTAMP(3) NOT NULL,
    "tanggal_setor_pph" TIMESTAMP(3) NOT NULL,
    "tanggal_bayar_pph" TIMESTAMP(3) NOT NULL,
    "minta_billing_sendiri" TEXT NOT NULL,
    "id_billing" TEXT NOT NULL,
    "ntpn" TEXT NOT NULL,
    "pic_pencairan_penghasilan" TEXT NOT NULL,

    CONSTRAINT "kegiatan_penghasilan_orang_pajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_kegiatan_penghasilan_orang_pajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kegiatan_penghasilan_orang_pajak_id" TEXT NOT NULL,
    "objek_pajak_id" TEXT NOT NULL,
    "status_pegawai" TEXT NOT NULL,
    "npwp" INTEGER NOT NULL,
    "nama_bank" TEXT NOT NULL,
    "no_rekening" INTEGER NOT NULL,
    "nama_rekening" TEXT NOT NULL,
    "penghasilan_bruto" DOUBLE PRECISION NOT NULL,
    "tarif_berlaku" DOUBLE PRECISION NOT NULL,
    "metode_potong" TEXT NOT NULL,
    "file_bukti_potong" TEXT NOT NULL,
    "status_item_kegiatan" TEXT NOT NULL,

    CONSTRAINT "item_kegiatan_penghasilan_orang_pajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kegiatan_penghasilan_badan" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "id_kegiatan_anggaran" TEXT NOT NULL,
    "uraian_kegiatan" TEXT NOT NULL,
    "tanggal_transaksi" TIMESTAMP(3) NOT NULL,
    "jenis_pajak_id" TEXT NOT NULL,
    "wajib_pajak_badan_usaha_id" TEXT NOT NULL,
    "penghasilan_bruto" DOUBLE PRECISION NOT NULL,
    "objek_pajak_id" TEXT NOT NULL,
    "tarif_pajak" DOUBLE PRECISION NOT NULL,
    "tanggal_pemotongan_pph" TIMESTAMP(3) NOT NULL,
    "tanggal_setor_pph" TIMESTAMP(3) NOT NULL,
    "tanggal_bayar_pph" TIMESTAMP(3) NOT NULL,
    "no_rekening" INTEGER NOT NULL,
    "nama_rekening" TEXT NOT NULL,
    "narahubung" TEXT NOT NULL,
    "file_bukti_potong" TEXT NOT NULL,

    CONSTRAINT "kegiatan_penghasilan_badan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detail_file_pendukung" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kegaiatan_penghasilan_orang_pajak_id" TEXT NOT NULL,
    "jenis_dokumen" TEXT NOT NULL,
    "no_dokumen" INTEGER NOT NULL,
    "file_bukti_pendukung" TEXT NOT NULL,

    CONSTRAINT "detail_file_pendukung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventarisasi_pajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "jenis_pajak_id" TEXT NOT NULL,
    "uraian_kegiatan" TEXT NOT NULL,
    "id_kegiatan_anggaran" TEXT NOT NULL,
    "tanggal_transaksi" TIMESTAMP(3) NOT NULL,
    "penghasilan_bruto" DOUBLE PRECISION NOT NULL,
    "nominal_pajak" DOUBLE PRECISION NOT NULL,
    "npwp_pemotong" INTEGER NOT NULL,
    "nama_pemotong" TEXT NOT NULL,
    "file_bukti" TEXT NOT NULL,

    CONSTRAINT "inventarisasi_pajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_kegiatan_penghasilan_orang_pajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "jenis_pajak_id" TEXT NOT NULL,
    "kegiatan_penghasilan_orang_pajak_id" TEXT NOT NULL,
    "uraian_kegiatan" TEXT NOT NULL,
    "tanggal_bayar_op" TIMESTAMP(3) NOT NULL,
    "id_kegiatan_anggaran" TEXT NOT NULL,
    "tanggal_pemotongan_pph" TIMESTAMP(3) NOT NULL,
    "tanggal_setor_pph" TIMESTAMP(3) NOT NULL,
    "tanggal_bayar_pph" TIMESTAMP(3) NOT NULL,
    "minta_billing_sendiri" TEXT NOT NULL,
    "id_billing" TEXT NOT NULL,
    "ntpn" TEXT NOT NULL,
    "nip_log" TEXT NOT NULL,

    CONSTRAINT "log_kegiatan_penghasilan_orang_pajak_pkey" PRIMARY KEY ("id")
);
