import mongoose, { Document, Schema, model } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

export interface Test {
    testId?: number;
    title: string,
}

const schema = new Schema({
    num: {type: Number, required: true, unique: true, index: true},
    title: {type: String, required: true},
})

autoIncrement.initialize(mongoose.connection);
schema.plugin(autoIncrement.plugin, {
    model: 'Test',
    field: 'num',
    startAt: 1, //시작.
    increment: 1, //증가.
})

export const TestModel = model<Test & Document>('Test', schema);