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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_auto_increment_1 = __importDefault(require("mongoose-auto-increment"));
const schema = new mongoose_1.Schema({
    videoId: { type: Number, unique: true, index: true },
    type: { type: String, required: true },
    url: { type: String, required: true },
    text: { type: String, required: true },
    selected: { type: Boolean, required: true },
});
mongoose_auto_increment_1.default.initialize(mongoose_1.default.connection);
schema.plugin(mongoose_auto_increment_1.default.plugin, {
    model: 'Video',
    field: 'videoId',
    startAt: 1,
    increment: 1, //증가.
});
exports.VideoModel = (0, mongoose_1.model)('Video', schema);
//# sourceMappingURL=video.js.map