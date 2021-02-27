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
    console.log("GET /hospitalDay");
    index_1.hospitalDayController.getHospitalDays(req, res);
});
exports.station_router.patch('/:id', function (req, res) {
    console.log("PATCH /hospitalDay/:id");
    index_1.hospitalDayController.patchHospitalDay(req, res);
});
exports.station_router.post('/', function (req, res) {
    console.log("POST /hospitalDay");
    index_1.hospitalDayController.postHospitalDay(req, res);
});
exports.station_router.delete('/:id', function (req, res) {
    console.log("DELETE /hospitalDay/:id");
    index_1.hospitalDayController.deleteHospitalDayById(req, res);
});
exports.station_router.delete('/', function (req, res) {
    console.log("DELETE /hospitalDay");
    index_1.hospitalDayController.deleteHospitalDays(req, res);
});
