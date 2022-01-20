"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestService = void 0;
const test_1 = require("../model/test");
class TestService {
    async create(test) {
        let b = new test_1.TestModel(test);
        return await b.save();
    }
}
exports.TestService = TestService;
//# sourceMappingURL=test-service.js.map