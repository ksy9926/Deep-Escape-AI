import mongoose, { Connection } from 'mongoose';

// 몽고 커넥터 클래스
export class MongoConnector {
  private mongoConnection: Connection;

  constructor() {

  } 
  
  // 몽고디비 연결
  public connect(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      mongoose.connection.once('open', function () {
        console.log('MongoDB event open');

        mongoose.connection.on('connected', () => {
          console.log('MongoDB event connected');
        });

        mongoose.connection.on('disconnected', () => {
          console.log('MongoDB event disconnected');
        });

        mongoose.connection.on('reconnected', () => {
          console.log('MongoDB event reconnected');
        });

        mongoose.connection.on('error', (err) => {
          console.log('MongoDB event error: ' + err);
        });

        return resolve(null);
      });
        
      mongoose.set('debug', true)
      mongoose.set('debug', { color: false })
      mongoose.set('debug', { shell: true })

      // 몽고디비 세팅 및 연결
      this.mongoConnection = mongoose.connection;
      mongoose.connect(process.env.MONGODB_URL, { 
        keepAlive: true
      }).then(() => {
        console.log('MongoDB Connected.');
        resolve(null);
      }).catch(reject);
    });
  }

  public disconnect(): Promise<any> {
    return this.mongoConnection.close();
  }
}