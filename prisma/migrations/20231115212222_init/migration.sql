-- CreateTable
CREATE TABLE "Negara" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kodeNegara" TEXT NOT NULL,
    "namaNegara" TEXT NOT NULL,

    CONSTRAINT "Negara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provinsi" (
    "id" UUID NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Provinsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kabupaten" (
    "id" UUID NOT NULL,
    "provinsiId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kabupaten_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Distrik" (
    "id" UUID NOT NULL,
    "kabupatenId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Distrik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kampung" (
    "id" UUID NOT NULL,
    "distrikId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kampung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JenisPajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "namaPajak" TEXT NOT NULL,
    "deskripsiPajak" TEXT NOT NULL,
    "tataCaraHitungPajak" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JenisPajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pegawai" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nip" TEXT NOT NULL,
    "namaPegawai" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nik" TEXT NOT NULL,
    "namaKtp" TEXT NOT NULL,
    "npwp" INTEGER,
    "namaWajibPajak" TEXT NOT NULL,
    "jenisKelamin" TEXT NOT NULL,
    "statusNikah" TEXT NOT NULL,
    "jmlTanggungan" INTEGER NOT NULL DEFAULT 0,
    "tglMasuk" TIMESTAMP(3) NOT NULL,
    "tglBerakhir" TIMESTAMP(3),
    "bankTransfer" TEXT NOT NULL,
    "noRekening" INTEGER NOT NULL,
    "namaRekening" TEXT NOT NULL,
    "statusPegawai" TEXT NOT NULL,

    CONSTRAINT "Pegawai_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WajibPajakBadanUsaha" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "namaBadan" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "npwp" INTEGER,
    "namaNpwp" TEXT NOT NULL,
    "kotaNpwp" TEXT NOT NULL,
    "namaBank" TEXT NOT NULL,
    "noRekening" INTEGER NOT NULL,
    "namaRekening" TEXT NOT NULL,
    "narahubung" TEXT NOT NULL,
    "skbPph23" TEXT NOT NULL,
    "masaBerlakuBebasPph23" INTEGER NOT NULL,
    "fileFotoIdentitasBadan" TEXT NOT NULL,
    "fileFotoBuktiRekening" TEXT NOT NULL,
    "fileFotoNpwp" TEXT NOT NULL,
    "fileSuratBebasPph23" TEXT NOT NULL,
    "statusPkp" TEXT NOT NULL,

    CONSTRAINT "WajibPajakBadanUsaha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KegiatanPenghasilanOrangPajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idKegiatanAnggaran" TEXT NOT NULL,
    "uraianKegiatan" TEXT NOT NULL,
    "tanggalPenghasilan" TIMESTAMP(3) NOT NULL,
    "jenisPajakId" TEXT NOT NULL,
    "tanggalPemotonganPph" TIMESTAMP(3) NOT NULL,
    "tanggalSetorPph" TIMESTAMP(3) NOT NULL,
    "tanggalBayarPph" TIMESTAMP(3) NOT NULL,
    "mintaBillingSendiri" TEXT NOT NULL,
    "idBilling" TEXT NOT NULL,
    "ntpn" TEXT NOT NULL,
    "picPencairanPenghasilan" TEXT NOT NULL,

    CONSTRAINT "KegiatanPenghasilanOrangPajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemKegiatanPenghasilanOrangPajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kegiatanId" TEXT NOT NULL,
    "objekPajakId" TEXT NOT NULL,
    "statusPegawai" TEXT NOT NULL,
    "npwp" INTEGER NOT NULL,
    "namaBank" TEXT NOT NULL,
    "noRekening" INTEGER NOT NULL,
    "namaRekening" TEXT NOT NULL,
    "penghasilanBruto" DOUBLE PRECISION NOT NULL,
    "tarifBerlaku" DOUBLE PRECISION NOT NULL,
    "metodePotong" TEXT NOT NULL,
    "fileBuktiPotong" TEXT NOT NULL,
    "statusItemKegiatan" TEXT NOT NULL,

    CONSTRAINT "ItemKegiatanPenghasilanOrangPajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KegiatanPenghasilanBadan" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idKegiatanAnggaran" TEXT NOT NULL,
    "uraianKegiatan" TEXT NOT NULL,
    "tanggalTransaksi" TIMESTAMP(3) NOT NULL,
    "jenisPajakId" TEXT NOT NULL,
    "wajibPajakBadanUsahaId" TEXT NOT NULL,
    "penghasilanBruto" DOUBLE PRECISION NOT NULL,
    "objekPajakId" TEXT NOT NULL,
    "tarifPajak" DOUBLE PRECISION NOT NULL,
    "tanggalPemotonganPph" TIMESTAMP(3) NOT NULL,
    "tanggalSetorPph" TIMESTAMP(3) NOT NULL,
    "tanggalBayarPph" TIMESTAMP(3) NOT NULL,
    "noRekening" INTEGER NOT NULL,
    "namaRekening" TEXT NOT NULL,
    "narahubung" TEXT NOT NULL,
    "fileBuktiPotong" TEXT NOT NULL,

    CONSTRAINT "KegiatanPenghasilanBadan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DetailFilePendukung" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "kegiatanPenghasilanOrangPajakId" TEXT NOT NULL,
    "jenisDokumen" TEXT NOT NULL,
    "noDokumen" INTEGER NOT NULL,
    "fileBuktiPendukung" TEXT NOT NULL,

    CONSTRAINT "DetailFilePendukung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InventarisasiPajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "jenisPajakId" TEXT NOT NULL,
    "uraianKegiatan" TEXT NOT NULL,
    "idKegiatanAnggaran" TEXT NOT NULL,
    "tanggalTransaksi" TIMESTAMP(3) NOT NULL,
    "penghasilanBruto" DOUBLE PRECISION NOT NULL,
    "nominalPajak" DOUBLE PRECISION NOT NULL,
    "npwpPemotong" INTEGER NOT NULL,
    "namaPemotong" TEXT NOT NULL,
    "fileBukti" TEXT NOT NULL,

    CONSTRAINT "InventarisasiPajak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LogKegiatanPenghasilanOrangPajak" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "jenisPajakId" TEXT NOT NULL,
    "kegiatanPenghasilanOrangPajakId" TEXT NOT NULL,
    "uraianKegiatan" TEXT NOT NULL,
    "tanggalBayarOp" TIMESTAMP(3) NOT NULL,
    "idKegiatanAnggaran" TEXT NOT NULL,
    "tanggalPemotonganPph" TIMESTAMP(3) NOT NULL,
    "tanggalSetorPph" TIMESTAMP(3) NOT NULL,
    "tanggalBayarPph" TIMESTAMP(3) NOT NULL,
    "mintaBillingSendiri" TEXT NOT NULL,
    "idBilling" TEXT NOT NULL,
    "ntpn" TEXT NOT NULL,
    "nipLog" TEXT NOT NULL,

    CONSTRAINT "LogKegiatanPenghasilanOrangPajak_pkey" PRIMARY KEY ("id")
);
