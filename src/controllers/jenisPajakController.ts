import { Request, Response } from 'express';
import * as jenisPajakService from '../services/jenisPajakService';

export const createJenisPajak = async (req: Request, res: Response) => {
  try {
    const jenisPajak = await jenisPajakService.createJenisPajak(req.body);
    res.json(jenisPajak);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getJenisPajakList = async (_req: Request, res: Response) => {
  try {
    const jenisPajakList = await jenisPajakService.getJenisPajakList();
    res.json(jenisPajakList);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getJenisPajakById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const jenisPajak = await jenisPajakService.getJenisPajakById(id);
    if (!jenisPajak) {
      return res.status(404).json({ error: 'Not Found' });
    }
    res.json(jenisPajak);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateJenisPajak = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedJenisPajak = await jenisPajakService.updateJenisPajak(
      id,
      req.body
    );
    res.json(updatedJenisPajak);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteJenisPajak = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await jenisPajakService.deleteJenisPajak(id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
