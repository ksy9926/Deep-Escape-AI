import '../env.js';
import express from 'express';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const server = createServer(app);
const { MONGO_URI, PORT } = process.env;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ test: '안녕하세요' });
});

server.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
