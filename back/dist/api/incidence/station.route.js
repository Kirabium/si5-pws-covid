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
// day dep
exports.station_router.get('/dep/day', function (req, res) {
    console.log("GET /incidence/dep/day");
    index_1.incidenceDayDepController.getIncidencesDayDep(req, res);
});
exports.station_router.patch('/dep/day/:id', function (req, res) {
    console.log("PATCH /incidence/dep/day/:id");
    index_1.incidenceDayDepController.patchIncidenceDayDep(req, res);
});
exports.station_router.post('/dep/day', function (req, res) {
    console.log("POST /incidence/dep/day");
    index_1.incidenceDayDepController.postIncidenceDayDep(req, res);
});
exports.station_router.delete('/dep/day/:id', function (req, res) {
    console.log("DELETE /incidence/dep/day/:id");
    index_1.incidenceDayDepController.deleteIncidenceDayDepById(req, res);
});
exports.station_router.delete('/dep/day', function (req, res) {
    console.log("DELETE /incidence/dep/day");
    index_1.incidenceDayDepController.deleteIncidencesDayDep(req, res);
});
// day france
exports.station_router.get('/france/day', function (req, res) {
    console.log("GET /incidence/france/day");
    index_1.incidenceDayFranceController.getIncidencesDayFrance(req, res);
});
exports.station_router.patch('/france/day/:id', function (req, res) {
    console.log("PATCH /incidence/france/day/:id");
    index_1.incidenceDayFranceController.patchIncidenceDayFrance(req, res);
});
exports.station_router.post('/france/day', function (req, res) {
    console.log("POST /incidence/france/day");
    index_1.incidenceDayFranceController.postIncidenceDayFrance(req, res);
});
exports.station_router.delete('/france/day/:id', function (req, res) {
    console.log("DELETE /incidence/france/day/:id");
    index_1.incidenceDayFranceController.deleteIncidenceDayFranceById(req, res);
});
exports.station_router.delete('/france/day', function (req, res) {
    console.log("DELETE /incidence/france/day");
    index_1.incidenceDayFranceController.deleteIncidencesDayFrance(req, res);
});
// day reg
exports.station_router.get('/reg/day', function (req, res) {
    console.log("GET /incidence/reg/day");
    index_1.incidenceDayRegController.getIncidencesDayReg(req, res);
});
exports.station_router.patch('/reg/day/:id', function (req, res) {
    console.log("PATCH /incidence/reg/day/:id");
    index_1.incidenceDayRegController.patchIncidenceDayReg(req, res);
});
exports.station_router.post('/reg/day', function (req, res) {
    console.log("POST /incidence/reg/day");
    index_1.incidenceDayRegController.postIncidenceDayReg(req, res);
});
exports.station_router.delete('/reg/day/:id', function (req, res) {
    console.log("DELETE /incidence/reg/day/:id");
    index_1.incidenceDayRegController.deleteIncidenceDayRegById(req, res);
});
exports.station_router.delete('/reg/day', function (req, res) {
    console.log("DELETE /incidence/reg/day");
    index_1.incidenceDayRegController.deleteIncidencesDayReg(req, res);
});
//week dep
exports.station_router.get('/dep/week', function (req, res) {
    console.log("GET /incidence/dep/week");
    index_1.incidenceWeekDepController.getIncidencesWeekDep(req, res);
});
exports.station_router.patch('/dep/week/:id', function (req, res) {
    console.log("PATCH /incidence/dep/week/:id");
    index_1.incidenceWeekDepController.patchIncidenceWeekDep(req, res);
});
exports.station_router.post('/dep/week', function (req, res) {
    console.log("POST /incidence/dep/week");
    index_1.incidenceWeekDepController.postIncidenceWeekDep(req, res);
});
exports.station_router.delete('/dep/week/:id', function (req, res) {
    console.log("DELETE /incidence/dep/week/:id");
    index_1.incidenceWeekDepController.deleteIncidenceWeekDepById(req, res);
});
exports.station_router.delete('/dep/week', function (req, res) {
    console.log("DELETE /incidence/dep/week");
    index_1.incidenceWeekDepController.deleteIncidencesWeekDep(req, res);
});
//week france
exports.station_router.get('/france/week', function (req, res) {
    console.log("GET /incidence/france/week");
    index_1.incidenceWeekFranceController.getIncidencesWeekFrance(req, res);
});
exports.station_router.patch('/france/week/:id', function (req, res) {
    console.log("PATCH /incidence/france/week/:id");
    index_1.incidenceWeekFranceController.patchIncidenceWeekFrance(req, res);
});
exports.station_router.post('/france/week', function (req, res) {
    console.log("POST /incidence/france/week");
    index_1.incidenceWeekFranceController.postIncidenceWeekFrance(req, res);
});
exports.station_router.delete('/france/week/:id', function (req, res) {
    console.log("DELETE /incidence/france/week/:id");
    index_1.incidenceWeekFranceController.deleteIncidenceWeekFranceById(req, res);
});
exports.station_router.delete('/france/week', function (req, res) {
    console.log("DELETE /incidence/france/week");
    index_1.incidenceWeekFranceController.deleteIncidencesWeekFrance(req, res);
});
//week reg
exports.station_router.get('/reg/week', function (req, res) {
    console.log("GET /incidence/reg/week");
    index_1.incidenceWeekRegController.getIncidencesWeekReg(req, res);
});
exports.station_router.patch('/reg/week/:id', function (req, res) {
    console.log("PATCH /incidence/reg/week/:id");
    index_1.incidenceWeekRegController.patchIncidenceWeekReg(req, res);
});
exports.station_router.post('/reg/week', function (req, res) {
    console.log("POST /incidence/reg/week");
    index_1.incidenceWeekRegController.postIncidenceWeekReg(req, res);
});
exports.station_router.delete('/reg/week/:id', function (req, res) {
    console.log("DELETE /incidence/reg/week/:id");
    index_1.incidenceWeekRegController.deleteIncidenceWeekRegById(req, res);
});
exports.station_router.delete('/reg/week', function (req, res) {
    console.log("DELETE /incidence/reg/week");
    index_1.incidenceWeekRegController.deleteIncidencesWeekReg(req, res);
});
