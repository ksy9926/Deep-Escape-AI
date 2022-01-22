"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const mongo_connector_1 = require("./mongo-connector");
const test_router_1 = __importDefault(require("./routes/test-router"));
class MainServer {
    constructor() {
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
    }
    async start() {
        const mongoConnector = new mongo_connector_1.MongoConnector();
        await mongoConnector.connect();
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)()); //cors를 allow한다.
        const server = (0, http_1.createServer)(this.app);
        const io = new socket_io_1.Server(server, {
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"],
            },
        });
        io.on("connection", (socket) => {
            console.log("UserConnected", socket.id);
            socket.on("connected", (cookie) => {
                console.log("connected OK!!!");
                socket.emit("entrance-message", "i received your message!");
            });
            socket.on("disconnect", () => {
                console.log("UserDisconnected");
            });
            socket.on("chat-message", (msg) => {
                console.log("mesage: ", msg);
            });
        });
        this.app.use("/test", test_router_1.default);
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });
        server.listen(8080, () => {
            console.log('Server Opened.');
        });
    }
}
exports.MainServer = MainServer;
//# sourceMappingURL=mainserver.js.map