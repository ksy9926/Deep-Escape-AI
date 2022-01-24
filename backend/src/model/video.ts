import mongoose, { Document, Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// 비디오 타입
export interface Video {
  videoId?: number;
  type: string;
  url: string;
  text: string;
  selected: boolean
}

// 비디오 스키마
const schema = new Schema({
  videoId: {type: Number, unique: true, index: true},
  type: {type: String, required: true},
  url: {type: String, required: true},
  text: {type: String, required: true},
  selected: {type: Boolean, required: true},
})

// 비디오 인덱스 auto increment
autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
  model: 'Video',
  field: 'videoId',
  startAt: 1,
  increment: 1,
})
export const VideoModel = model<Video & Document>('Video', schema);