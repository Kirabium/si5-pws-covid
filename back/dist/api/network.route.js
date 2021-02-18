"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("./index");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/rails', function (req, res) {
    console.log("GET /network/rails");
    index_1.networkController.getRails(req, res);
});
exports.router.post('/rails', function (req, res) {
    console.log("POST /network/rails");
    index_1.networkController.postRail(req, res);
});
exports.router.patch('/rails/:id', function (req, res) {
    console.log("PATCH /network/rails/:id");
    index_1.networkController.patchRail(req, res);
});
exports.router.get('/rails/:id', function (req, res) {
    console.log("GET /network/rails/:id");
    index_1.networkController.getRailById(req, res);
});
exports.router.delete('/rails/:id', function (req, res) {
    console.log("DELETE /network/rails/:id");
    index_1.networkController.deleteRailById(req, res);
});
exports.router.delete('/rails', function (req, res) {
    console.log("DELETE /network/rails");
    index_1.networkController.deleteRails(req, res);
});
exports.router.get('/hospitalDay', function (req, res) {
    console.log("GET /network/hospitalDay");
    index_1.networkController.getStations(req, res);
});
exports.router.patch('/hospitalDay/:id', function (req, res) {
    console.log("PATCH /network/hospitalDay/:id");
    index_1.networkController.patchStation(req, res);
});
exports.router.post('/hospitalDay', function (req, res) {
    console.log("POST /network/hospitalDay");
    index_1.networkController.postStation(req, res);
});
exports.router.delete('/hospitalDay/:id', function (req, res) {
    console.log("DELETE /network/hospitalDay/:id");
    index_1.networkController.deleteStationById(req, res);
});
exports.router.delete('/hospitalDay', function (req, res) {
    console.log("DELETE /network/hospitalDay");
    index_1.networkController.deleteStations(req, res);
});
exports.router.post('/path', function (req, res) {
    console.log("POST /network/path");
    index_1.networkController.getPaths(req, res);
});
exports.router.post('/init', function (req, res) {
    console.log("POST /network/init");
    index_1.networkController.initDB(req, res);
});
exports.router.delete('/flush', function (req, res) {
    console.log("DELETE /network/flush");
    index_1.networkController.clearCollections(req, res);
});
