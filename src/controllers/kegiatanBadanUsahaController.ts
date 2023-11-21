import { Request, Response } from 'express';
import * as kegiatanBadanService from '../services/kegiatanBadanUsahaService';

export const createKegiatanBadan = async (req: Request, res: Response) => {
  try {
    const kegiatan_badan = await kegiatanBadanService.createKegiatanBadan(
      req.body
    );
    res.json(kegiatan_badan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getKegiatanBadanById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const kegiatan_badan = await kegiatanBadanService.getKegiatanBadanById(id);
    if (!kegiatan_badan) {
      return res.status(404).json({ error: 'Not Found' });
    }
    res.json(kegiatan_badan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateKegiatanBadan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedKegiatanBadan = await kegiatanBadanService.updateKegiatanBadan(
      id,
      req.body
    );
    res.json(updatedKegiatanBadan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteKegiatanBadan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await kegiatanBadanService.deleteKegiatanBadan(id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
