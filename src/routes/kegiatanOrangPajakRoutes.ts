import express from 'express';
import * as kegiatanController from '../controllers/kegiatanOrangPajakController';

const router = express.Router();

router.post('/', kegiatanController.createKegiatan);
router.get('/', kegiatanController.getKegiatanList);
router.get('/:id', kegiatanController.getKegiatanById);
router.put('/:id', kegiatanController.updateKegiatan);
router.delete('/:id', kegiatanController.deleteKegiatan);

export default router;
