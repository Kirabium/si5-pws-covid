"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.station_router = void 0;
var express_1 = __importDefault(require("express"));
var index_1 = require("./index");
exports.station_router = express_1.default.Router({
    strict: true
});
exports.station_router.get('/', function (req, res) {
    console.log("GET /incidenceDay");
    index_1.incidenceDayController.getIncidenceDays(req, res);
});
exports.station_router.patch('/:id', function (req, res) {
    console.log("PATCH /incidenceDay/:id");
    index_1.incidenceDayController.patchIncidenceDay(req, res);
});
exports.station_router.post('/', function (req, res) {
    console.log("POST /incidenceDay");
    index_1.incidenceDayController.postIncidenceDay(req, res);
});
exports.station_router.delete('/user/:id', function (req, res) {
    console.log("DELETE /incidenceDay/:id");
    index_1.incidenceDayController.deleteIncidenceDayById(req, res);
});
exports.station_router.delete('/', function (req, res) {
    console.log("DELETE /incidenceDay");
    index_1.incidenceDayController.deleteIncidenceDays(req, res);
});
