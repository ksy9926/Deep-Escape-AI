import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { MongoConnector } from './mongo-connector';
import testRouter from './routes/test-router';

export class MainServer {
	private app: any;

	constructor() {
		dotenv.config();
		this.app = express();
	}

	async start(): Promise<void> {
		const mongoConnector = new MongoConnector();
		await mongoConnector.connect();
		
		this.app.use(express.json());
		this.app.use(cors()); //cors를 allow한다.
		this.app.use("/test", testRouter);

		this.app.listen(8080, () => {
			console.log('Server Opened.');
		});
	}
}