import express, { Request, Response } from 'express';

import jenisPajakRoutes from './routes/jenisPajakRoutes';
import kegiatanOrangPajakRoutes from './routes/kegiatanOrangPajakRoutes';
import kegiatanBadanUsahaRoutes from './routes/kegiatanBadanUsahaRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/jenis-pajak', jenisPajakRoutes);
app.use('kegiatan-orang-pajak', kegiatanOrangPajakRoutes);
app.use('kegiatan-badan-usaha', kegiatanBadanUsahaRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
