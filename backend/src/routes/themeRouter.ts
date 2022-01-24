import express, { Request, response, Response } from 'express';

const asyncify = require('express-asyncify');
const router = asyncify(express.Router());

export default router