import { Request, Response, response } from "express";
import { uploadService } from "../services/uploadService"

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.file

    const response = await uploadService({
      file: file?.buffer
    })

    return res.status(200).json({ data: response })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "internal server error" })
  }
}