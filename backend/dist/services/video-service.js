"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const video_1 = require("../model/video");
class VideoService {
    async create(video) {
        let v = new video_1.VideoModel(video);
        return await v.save();
    }
    async find() {
        const videoData = await video_1.VideoModel.find();
        return videoData;
    }
}
exports.VideoService = VideoService;
//# sourceMappingURL=video-service.js.map