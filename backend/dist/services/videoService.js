"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const video_1 = require("../model/video");
class VideoService {
    // 영상 조회
    async findOne(type, selected) {
        const videoData = await video_1.VideoModel.findOne({ type: type, selected: selected });
        console.log('findOne videoData: ', videoData);
        return videoData;
    }
    // 모든 영상 조회
    async findAll() {
        const videoData = await video_1.VideoModel.find({});
        console.log('findOne videoData: ', videoData);
        return videoData;
    }
    // 영상 생성
    async create(video) {
        let v = new video_1.VideoModel(video);
        return await v.save();
    }
    // 영상 수정
    async update(videoId) {
        const video = await video_1.VideoModel.findOne({ videoId: videoId });
        video.selected = false;
        const videoData = await video_1.VideoModel.findOneAndUpdate({ videoId: videoId }, video, { new: true });
        console.log('update videoData: ', videoData);
        return videoData;
    }
}
exports.VideoService = VideoService;
//# sourceMappingURL=videoService.js.map