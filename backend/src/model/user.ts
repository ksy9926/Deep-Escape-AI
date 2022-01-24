import { Document, Schema, model } from 'mongoose';

// 유저 타입
export interface User {
  email: string;
  nickname: string;
  password: string;
  admin: boolean;
}

// 유저 스키마
const schema = new Schema({
  email: {type: String, required: true, unique: true, index: true},
  nickname: {type: String, required: true},
  password: {type: String, required: true},
  admin: {type: Boolean, required: true}
})

export const UserModel = model<User & Document>('User', schema);