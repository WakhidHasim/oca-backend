import express from 'express';

import jenisPajakRoutes from './routes/jenisPajakRoutes';
import kegiatanOrangPajakRoutes from './routes/kegiatanOrangPajakRoutes';
import kegiatanBadanUsahaRoutes from './routes/kegiatanBadanUsahaRoutes';
import wajibPajakBadanUsahaRoutes from './routes/wajibPajakBadanUsahaRoutes';
import uploadRoutes from "./routes/uploadRoutes"

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/jenis-pajak', jenisPajakRoutes);
app.use('kegiatan-orang-pajak', kegiatanOrangPajakRoutes);
app.use('kegiatan-badan-usaha', kegiatanBadanUsahaRoutes);
app.use('/wajib-pajak-badan-usaha', wajibPajakBadanUsahaRoutes);
app.use('/wajib-pajak-orang-pribadi', wajibPajakBadanUsahaRoutes);
app.use("/upload", uploadRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
