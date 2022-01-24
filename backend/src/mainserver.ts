import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { MongoConnector } from './mongo-connector';
import videoRouter from './routes/videoRouter';
import userRouter from './routes/userRouter';
import themeRouter from './routes/themeRouter';

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

		this.app.use("/video", videoRouter);
		this.app.use("/user", userRouter);
		this.app.use("/theme", themeRouter);
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World');
    });
    
    this.app.listen(8080, () => {
			console.log('Server Opened.');
		});
	}
}