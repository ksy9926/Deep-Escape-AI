import express, { Request, Response } from 'express';
// import asyncify from 'express-asyncify';

import { TestService } from '../services/test-service';
import { Test } from '../model/test';

const asyncify = require('express-asyncify');
//라우터에서 비동기 함수를 사용할 수 있게 한다.
const router = asyncify(express.Router());

//게시판 글쓰기 요청.
router.post('/post', async (req: Request, res: Response) => {
  const testService = new TestService();

  try{
    let test: Test = {
      title: req.body.title,
    };
    const result = await testService.create(test);
    console.log(result);
    res.status(201).send('success');
  }catch(err) {
    res.status(400).send('write error');
  }
});

export default router