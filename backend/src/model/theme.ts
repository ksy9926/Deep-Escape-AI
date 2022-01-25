import mongoose, { Document, Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// 테마 타입
export interface Theme {
  themeId?: number,
  award: string,
  title: string,
  store: string,
  img: string,
}

// 테마 스키마
const schema = new Schema({
  themeId: {type: Number, unique: true, index: true},
  award: {type: String, required: true},
  title: {type: String, required: true},
  store: {type: String, required: true},
  img: {type: String, required: true},
})

// 테마 인덱스 auto increment
autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
  model: 'Theme',
  field: 'themeId',
  startAt: 1,
  increment: 1,
})

export const ThemeModel = model<Theme & Document>('Theme', schema);