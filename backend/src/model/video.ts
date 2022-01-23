import mongoose, { Document, Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

export interface Video {
  videoId?: number;
  type: string;
  url: string;
}

const schema = new Schema({
  videoId: {type: Number, unique: true, index: true},
  type: {type: String, required: true},
  url: {type: String, required: true},
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
  model: 'Video',
  field: 'videoId',
  startAt: 1, //시작.
  increment: 1, //증가.
})
export const VideoModel = model<Video & Document>('Video', schema);