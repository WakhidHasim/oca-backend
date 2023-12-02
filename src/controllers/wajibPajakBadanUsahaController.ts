import { Request, Response } from 'express';
import * as wajibPajakBadanUsahaService from '../services/wajibPajakBadanUsahaService';

export const createWajibPajakBadanUsaha = async (
  req: Request,
  res: Response
) => {
  try {
    const wajibPajakBadanUsaha =
      await wajibPajakBadanUsahaService.createWajibPajakBadanUsaha(req.body);
    res.json({
      status: {
        code: 200,
        description: 'OK',
      },
      result: wajibPajakBadanUsaha,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getWajibPajakBadanUsaha = async (req: Request, res: Response) => {
  try {
    const queryParameters = req.query;
    const jenisPajakList =
      await wajibPajakBadanUsahaService.getWajibPajakBadanUsaha(
        queryParameters
      );
    res.json({
      status: {
        code: 200,
        description: 'OK',
      },
      result: jenisPajakList,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateWajibPajakBadanUsaha = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedWajibPajakBadanUsaha =
      await wajibPajakBadanUsahaService.updateWajibPajakBadanUsaha(
        id,
        req.body
      );

    res.json({
      status: {
        code: 200,
        description: 'OK',
      },
      result: updatedWajibPajakBadanUsaha,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteWajibPajakBadanUsaha = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    await wajibPajakBadanUsahaService.deleteWajibPajakBadanUsaha(id);

    res.json({
      status: {
        code: 200,
        description: 'OK',
      },
      result: {
        message: 'Deleted successfully',
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
