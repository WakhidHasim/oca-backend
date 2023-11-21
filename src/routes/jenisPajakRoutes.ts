import express from 'express';
import * as jenisPajakController from '../controllers/jenisPajakController';

const router = express.Router();

router.post('/', jenisPajakController.createJenisPajak);
router.get('/', jenisPajakController.getJenisPajakList);
router.get('/:id', jenisPajakController.getJenisPajakById);
router.put('/:id', jenisPajakController.updateJenisPajak);
router.delete('/:id', jenisPajakController.deleteJenisPajak);

export default router;
