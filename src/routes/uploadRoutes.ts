import express from "express";

import { uploadFile } from "../controllers/uploadController"
import multer from "multer"

const router = express.Router()

const upload = multer()
router.post("/", upload.single("document"), uploadFile)

export default router;