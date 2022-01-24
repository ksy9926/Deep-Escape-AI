"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const http_1 = __importDefault(require("http"));
const file = fs_1.default.createWriteStream("file.jpg");
const request = http_1.default.get("https://ai-platform-public.s3.ap-northeast-2.amazonaws.com/ysy_2_26a0f0987f724dceb8663a7fda6f27be.mp4", function (response) {
    response.pipe(file);
});
//# sourceMappingURL=test.js.map