import mongoose, { Document, Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

export interface Theme {
  themeId?: number,
  award: boolean,
  rank?: number,
  img: string,
  title: string,
  store: string
}

const schema = new Schema({
  themeId: {type: Number, unique: true, index: true},
  award: {type: Boolean, required: true},
  rank: {type: Number},
  img: {type: String, required: true},
  title: {type: String, required: true},
  store: {type: String, required: true}
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
  model: 'Theme',
  field: 'themeId',
  startAt: 1, //시작.
  increment: 1, //증가.
})

export const ThemeModel = model<Theme & Document>('User', schema);