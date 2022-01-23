import express, { Request, response, Response } from 'express';
import { VideoService } from '../services/video-service';
import { Video } from '../model/video';

const asyncify = require('express-asyncify');
//라우터에서 비동기 함수를 사용할 수 있게 한다.
const router = asyncify(express.Router());

// 영상 조회
router.get('/', async (req: Request, res: Response) => {
  const videoService = new VideoService();

  try{
    const video: Video | null = await videoService.find();
    if(!video){
      response.status(400).send('video not exist')  
    }
    res.status(200).send(video);
  }catch(err) {
    res.status(400).send('write error');
  }
});

//영상 생성 요청.
router.post('/', async (req: Request, res: Response) => {
  const videoService = new VideoService();

  try{
    let video: Video = {
      type: req.body.type,
      url: req.body.url
    };
    const result = await videoService.create(video);
    console.log(result);
    res.status(201).send('success');
  }catch(err) {
    res.status(400).send('write error');
  }
});

export default router