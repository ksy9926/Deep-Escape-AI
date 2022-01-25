import express, { Request, response, Response } from 'express';
import { ThemeService } from '../services/themeService';
import { Theme } from '../model/theme';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const asyncify = require('express-asyncify');
const router = asyncify(express.Router());

// uploads 폴더가 없는 경우 생성
fs.readdir('uploads', (error) => {
  if (error) {
      fs.mkdirSync('uploads');
  }
})

// 업로드 규약을 정한다.
const upload = multer({
  storage: multer.diskStorage({
      destination(req, file, cb) {
          cb(null, 'uploads/');
      },
      filename(req, file, cb) {
          const ext = path.extname(file.originalname);
          cb(null, path.basename(file.originalname, ext) + ext);
      },
  })
})

// 이미지 업로드 요청.
router.post('/uploadImage', upload.single('file'), async (req: Request, res: Response) => {
    response.json({ url : `/img/${req.file.filename}`});
});

export default router