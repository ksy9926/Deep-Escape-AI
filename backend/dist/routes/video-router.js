"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const video_service_1 = require("../services/video-service");
const asyncify = require('express-asyncify');
//라우터에서 비동기 함수를 사용할 수 있게 한다.
const router = asyncify(express_1.default.Router());
// 영상 조회
router.get('/', async (req, res) => {
    const videoService = new video_service_1.VideoService();
    try {
        const video = await videoService.find();
        if (!video) {
            express_1.response.status(400).send('video not exist');
        }
        res.status(200).send(video);
    }
    catch (err) {
        res.status(400).send('write error');
    }
});
//영상 생성 요청.
router.post('/', async (req, res) => {
    const videoService = new video_service_1.VideoService();
    try {
        let video = {
            type: req.body.type,
            url: req.body.url
        };
        const result = await videoService.create(video);
        console.log(result);
        res.status(201).send('success');
    }
    catch (err) {
        res.status(400).send('write error');
    }
});
exports.default = router;
//# sourceMappingURL=video-router.js.map