import { Request, Response } from 'express';
import * as kegiatanService from '../services/kegiatanOrangPajakService';

export const createKegiatan = async (req: Request, res: Response) => {
  try {
    const kegiatan = await kegiatanService.createKegiatan(req.body);
    res.json(kegiatan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getKegiatanList = async (_req: Request, res: Response) => {
  try {
    const kegiatanList = await kegiatanService.getKegiatanList();
    res.json(kegiatanList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getKegiatanById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const kegiatan = await kegiatanService.getKegiatanById(id);
    if (!kegiatan) {
      return res.status(404).json({ error: 'Not Found' });
    }
    res.json(kegiatan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateKegiatan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedKegiatan = await kegiatanService.updateKegiatan(id, req.body);
    res.json(updatedKegiatan);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteKegiatan = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await kegiatanService.deleteKegiatan(id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
