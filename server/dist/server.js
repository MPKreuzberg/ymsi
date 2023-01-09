"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 4000;
app.use(express_1.default.json());
app.get('/users', (req, res) => {
    res.send('Hello from users!');
});
app.listen(port, () => {
    console.log(`Forum backend listening on port ${port}!`);
});
