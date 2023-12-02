import express from 'express';

import * as wajibPajakBadanUsahaController from '../controllers/wajibPajakBadanUsahaController';

const router = express.Router();

router.post('/', wajibPajakBadanUsahaController.createWajibPajakBadanUsaha);
router.get('/', wajibPajakBadanUsahaController.getWajibPajakBadanUsaha);
router.put('/:id', wajibPajakBadanUsahaController.updateWajibPajakBadanUsaha);
router.delete(
  '/:id',
  wajibPajakBadanUsahaController.deleteWajibPajakBadanUsaha
);

export default router;
