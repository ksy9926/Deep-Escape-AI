"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import asyncify from 'express-asyncify';
const test_service_1 = require("../services/test-service");
const asyncify = require('express-asyncify');
//라우터에서 비동기 함수를 사용할 수 있게 한다.
const router = asyncify(express_1.default.Router());
//게시판 글쓰기 요청.
router.post('/post', async (req, res) => {
    const testService = new test_service_1.TestService();
    try {
        let test = {
            title: req.body.title,
        };
        const result = await testService.create(test);
        console.log(result);
        res.status(201).send('success');
    }
    catch (err) {
        res.status(400).send('write error');
    }
});
exports.default = router;
//# sourceMappingURL=test-router.js.map