import express from 'express';
import * as kegiatanBadanController from '../controllers/kegiatanBadanUsahaController';

const router = express.Router();

router.post('/', kegiatanBadanController.createKegiatanBadan);
router.get('/:id', kegiatanBadanController.getKegiatanBadanById);
router.put('/:id', kegiatanBadanController.updateKegiatanBadan);
router.delete('/:id', kegiatanBadanController.deleteKegiatanBadan);

export default router;
