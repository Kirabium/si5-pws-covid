"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDBController = void 0;
var incidence_day_dep_model_1 = require("../../lib/incidence_day_dep.model");
var hospital_day_model_1 = require("../../lib/hospital_day.model");
//import * as dep from "../assets/dep.json"
//import * as hospital from "../assets/hospital.json"
var axios_1 = __importDefault(require("axios"));
var incidence_day_france_model_1 = require("../../lib/incidence_day_france.model");
var incidence_day_reg_model_1 = require("../../lib/incidence_day_reg.model");
var incidence_week_dep_model_1 = require("../../lib/incidence_week_dep.model");
var incidence_week_france_model_1 = require("../../lib/incidence_week_france.model");
var incidence_week_reg_model_1 = require("../../lib/incidence_week_reg.model");
var incidenceDayDepURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_dep_quoti.json";
var incidenceDayFranceURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_france_quoti.json";
var incidenceDayRegURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_region_quoti.json";
var incidenceWeekDepURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_dep_hebdo.json";
var incidenceWeekFranceURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_france_hebdo.json";
var incidenceWeekRegURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_region_hebdo.json";
var hospitalDayURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/hospital_covid19.json";
var MockDBController = /** @class */ (function () {
    function MockDBController() {
    }
    MockDBController.prototype.cleanAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, incidence_day_dep_model_1.IncidenceDayDepModel.deleteMany({})];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, incidence_day_france_model_1.IncidenceDayFranceModel.deleteMany({})];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, incidence_day_reg_model_1.IncidenceDayRegModel.deleteMany({})];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, incidence_week_dep_model_1.IncidenceWeekDepModel.deleteMany({})];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, incidence_week_france_model_1.IncidenceWeekFranceModel.deleteMany({})];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, incidence_week_reg_model_1.IncidenceWeekRegModel.deleteMany({})];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, hospital_day_model_1.HospitalDayModel.deleteMany({})];
                    case 7:
                        _a.sent();
                        console.log("Collections flushed");
                        return [2 /*return*/];
                }
            });
        });
    };
    MockDBController.prototype.clearCollections = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cleanAll()];
                    case 1:
                        _a.sent();
                        res.status(200).json("All collections cleared");
                        return [2 /*return*/];
                }
            });
        });
    };
    MockDBController.prototype.initDB = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var incidenceDayDepResult, incidenceDayDep, incidenceDayFranceResult, incidenceDayFrance, incidenceDayRegResult, incidenceDayReg, incidenceWeekDepResult, incidenceWeekDep, incidenceWeekFranceResult, incidenceWeekFrance, incidenceWeekRegResult, incidenceWeekReg, hospitalDayResult, hospitalDay, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cleanAll()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 17, , 18]);
                        return [4 /*yield*/, axios_1.default.get(incidenceDayDepURI)];
                    case 3:
                        incidenceDayDepResult = _a.sent();
                        incidenceDayDep = incidenceDayDepResult.data;
                        return [4 /*yield*/, incidence_day_dep_model_1.IncidenceDayDepModel.insertMany(incidenceDayDep)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get(incidenceDayFranceURI)];
                    case 5:
                        incidenceDayFranceResult = _a.sent();
                        incidenceDayFrance = incidenceDayFranceResult.data;
                        return [4 /*yield*/, incidence_day_france_model_1.IncidenceDayFranceModel.insertMany(incidenceDayFrance)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get(incidenceDayRegURI)];
                    case 7:
                        incidenceDayRegResult = _a.sent();
                        incidenceDayReg = incidenceDayRegResult.data;
                        return [4 /*yield*/, incidence_day_reg_model_1.IncidenceDayRegModel.insertMany(incidenceDayReg)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get(incidenceWeekDepURI)];
                    case 9:
                        incidenceWeekDepResult = _a.sent();
                        incidenceWeekDep = incidenceWeekDepResult.data;
                        return [4 /*yield*/, incidence_week_dep_model_1.IncidenceWeekDepModel.insertMany(incidenceWeekDep)];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get(incidenceWeekFranceURI)];
                    case 11:
                        incidenceWeekFranceResult = _a.sent();
                        incidenceWeekFrance = incidenceWeekFranceResult.data;
                        return [4 /*yield*/, incidence_week_france_model_1.IncidenceWeekFranceModel.insertMany(incidenceWeekFrance)];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get(incidenceWeekRegURI)];
                    case 13:
                        incidenceWeekRegResult = _a.sent();
                        incidenceWeekReg = incidenceWeekRegResult.data;
                        return [4 /*yield*/, incidence_week_reg_model_1.IncidenceWeekRegModel.insertMany(incidenceWeekReg)];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, axios_1.default.get(hospitalDayURI)];
                    case 15:
                        hospitalDayResult = _a.sent();
                        hospitalDay = hospitalDayResult.data;
                        return [4 /*yield*/, incidence_week_reg_model_1.IncidenceWeekRegModel.insertMany(hospitalDay)];
                    case 16:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 17:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 18];
                    case 18:
                        //  await HospitalDayModel.insertMany(hospital.default);
                        res.status(200).json("Collections initialized");
                        return [2 /*return*/];
                }
            });
        });
    };
    return MockDBController;
}());
exports.MockDBController = MockDBController;
