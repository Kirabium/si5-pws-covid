"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDB_router = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("./index");
exports.mockDB_router = express_1.default.Router({
    strict: true
});
exports.mockDB_router.post('/init', function (req, res) {
    console.log("POST /db/init");
    index_1.mockDBController.initDB(req, res);
});
exports.mockDB_router.delete('/flush', function (req, res) {
    console.log("DELETE /db/flush");
    index_1.mockDBController.clearCollections(req, res);
});
