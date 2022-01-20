import { Test, TestModel } from '../model/test';

export class TestService {
    public async create(test: Test): Promise<Test> {
        let b = new TestModel(test);
        return await b.save();
    }
}