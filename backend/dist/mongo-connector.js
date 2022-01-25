"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnector = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// 몽고 커넥터 클래스
class MongoConnector {
    constructor() {
    }
    // 몽고디비 연결
    connect() {
        return new Promise((resolve, reject) => {
            mongoose_1.default.connection.once('open', function () {
                console.log('MongoDB event open');
                mongoose_1.default.connection.on('connected', () => {
                    console.log('MongoDB event connected');
                });
                mongoose_1.default.connection.on('disconnected', () => {
                    console.log('MongoDB event disconnected');
                });
                mongoose_1.default.connection.on('reconnected', () => {
                    console.log('MongoDB event reconnected');
                });
                mongoose_1.default.connection.on('error', (err) => {
                    console.log('MongoDB event error: ' + err);
                });
                return resolve(null);
            });
            mongoose_1.default.set('debug', true);
            mongoose_1.default.set('debug', { color: false });
            mongoose_1.default.set('debug', { shell: true });
            // 몽고디비 세팅 및 연결
            this.mongoConnection = mongoose_1.default.connection;
            mongoose_1.default.connect(process.env.MONGODB_URL, {
                keepAlive: true
            }).then(() => {
                console.log('MongoDB Connected.');
                resolve(null);
            }).catch(reject);
        });
    }
    disconnect() {
        return this.mongoConnection.close();
    }
}
exports.MongoConnector = MongoConnector;
//# sourceMappingURL=mongo-connector.js.map