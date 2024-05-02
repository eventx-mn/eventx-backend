import mongoose, { ConnectOptions, Connection, Model } from 'mongoose';

export class connectDB {
  db: Connection;

  constructor(uri: string, options: ConnectOptions) {
    this.db = mongoose.createConnection(uri, options);

    this.db.on('error', () => {
      throw new Error('Mongo DB not connected!');
    });
  }
}
