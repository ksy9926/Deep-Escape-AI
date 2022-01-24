import express, { Request, response, Response } from 'express';

const asyncify = require('express-asyncify');
//라우터에서 비동기 함수를 사용할 수 있게 한다.
const router = asyncify(express.Router());

export default router