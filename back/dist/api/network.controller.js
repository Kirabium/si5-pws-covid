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
exports.NetworkController = void 0;
var mocked_station = require("../mocks/stations.mock");
var axios_1 = __importDefault(require("axios"));
var mocked_rail = require("../mocks/network.mock");
var network_model_1 = require("../lib/network.model");
// @ts-ignore
var mongoose_1 = __importDefault(require("mongoose"));
// New Code
var path = require('ngraph.path');
var pathURI = "http://network:666/pathfinding";
mongoose_1.default.connect("mongodb://mongo:27017/network", { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect("mongodb://localhost:27017/network", {useNewUrlParser: true, useUnifiedTopology: true});
var NetworkController = /** @class */ (function () {
    function NetworkController() {
    }
    NetworkController.prototype.clearCollections = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.RailModel.deleteMany({})];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, network_model_1.StationModel.deleteMany({})];
                    case 2:
                        _a.sent();
                        res.status(200).json("All collections cleared");
                        return [2 /*return*/];
                }
            });
        });
    };
    NetworkController.prototype.initDB = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, mocked_station_1, station, _a, mocked_rail_1, rail;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, network_model_1.RailModel.deleteMany({})];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, network_model_1.StationModel.deleteMany({})];
                    case 2:
                        _b.sent();
                        console.log("Collections flushed");
                        _i = 0, mocked_station_1 = mocked_station;
                        _b.label = 3;
                    case 3:
                        if (!(_i < mocked_station_1.length)) return [3 /*break*/, 6];
                        station = mocked_station_1[_i];
                        return [4 /*yield*/, network_model_1.StationModel.create(station)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        _a = 0, mocked_rail_1 = mocked_rail;
                        _b.label = 7;
                    case 7:
                        if (!(_a < mocked_rail_1.length)) return [3 /*break*/, 10];
                        rail = mocked_rail_1[_a];
                        return [4 /*yield*/, network_model_1.RailModel.create(rail)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        _a++;
                        return [3 /*break*/, 7];
                    case 10:
                        res.status(200).json("Collections initialized");
                        return [2 /*return*/];
                }
            });
        });
    };
    NetworkController.prototype.getRails = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, network_model_1.RailModel.find()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    NetworkController.prototype.postRail = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rail, pattern, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rail = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, network_model_1.RailModel.create(rail)];
                    case 2:
                        pattern = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_1)];
                    case 4: return [2 /*return*/, res.status(201).json(pattern)];
                }
            });
        });
    };
    NetworkController.prototype.patchRail = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rail, currentRail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rail = req.body;
                        return [4 /*yield*/, network_model_1.RailModel.findById(req.params['id'])];
                    case 1:
                        currentRail = _a.sent();
                        if (!currentRail) {
                            return [2 /*return*/, res.status(404).json("Could not find rail with id " + req.params['id'])];
                        }
                        return [4 /*yield*/, network_model_1.RailModel.findByIdAndUpdate(currentRail, rail, { new: true })];
                    case 2:
                        currentRail = _a.sent();
                        return [2 /*return*/, res.status(200).json(currentRail)];
                }
            });
        });
    };
    NetworkController.prototype.deleteRailById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.RailModel.findById(req.params['id'])];
                    case 1:
                        rail = _a.sent();
                        if (!rail) {
                            return [2 /*return*/, res.status(404).json("Could not find rail with id " + req.params['id'])];
                        }
                        return [4 /*yield*/, network_model_1.RailModel.deleteOne(rail)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(204).json()];
                }
            });
        });
    };
    NetworkController.prototype.deleteRails = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.RailModel.deleteMany({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(204).json("Rails have been all deleted")];
                }
            });
        });
    };
    NetworkController.prototype.getStations = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = res.status(200)).json;
                        return [4 /*yield*/, network_model_1.StationModel.find()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    NetworkController.prototype.postStation = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var station, pattern, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        station = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, network_model_1.StationModel.create(station)];
                    case 2:
                        pattern = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(400).json(error_2)];
                    case 4: return [2 /*return*/, res.status(201).json(pattern)];
                }
            });
        });
    };
    NetworkController.prototype.patchStation = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var station, currentStation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        station = req.body;
                        return [4 /*yield*/, network_model_1.StationModel.findById(req.params['id'])];
                    case 1:
                        currentStation = _a.sent();
                        if (!currentStation) {
                            return [2 /*return*/, res.status(404).json("Could not find station with id " + req.params['id'])];
                        }
                        return [4 /*yield*/, network_model_1.StationModel.findByIdAndUpdate(currentStation, station, { new: true })];
                    case 2:
                        currentStation = _a.sent();
                        return [2 /*return*/, res.status(200).json(currentStation)];
                }
            });
        });
    };
    NetworkController.prototype.deleteStationById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var station;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.StationModel.findById(req.params['id'])];
                    case 1:
                        station = _a.sent();
                        if (!station) {
                            return [2 /*return*/, res.status(404).json("Could not find station with id " + req.params['id'])];
                        }
                        return [4 /*yield*/, network_model_1.StationModel.deleteOne(station)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, res.status(204).json()];
                }
            });
        });
    };
    NetworkController.prototype.deleteStations = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.StationModel.deleteMany({})];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, res.status(204).json("Stations have been all deleted")];
                }
            });
        });
    };
    NetworkController.prototype.getPaths = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var start, end, answer, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = req.body.start;
                        end = req.body.end;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.post(pathURI, {
                                start: start,
                                end: end
                            })];
                    case 2:
                        answer = (_a.sent()).data;
                        return [2 /*return*/, res.status(200).json({
                                answer: answer
                            })];
                    case 3:
                        error_3 = _a.sent();
                        //console.error(error)
                        return [2 /*return*/, res.status(404).json("Could not find path from " + req.query.departure + " to " + req.query.arrival)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NetworkController.prototype.getStationById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var station;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.StationModel.findById(req.params['id'])];
                    case 1:
                        station = _a.sent();
                        if (!station) {
                            return [2 /*return*/, res.status(404).json("could not find station of id: " + req.params['id'])];
                        }
                        return [2 /*return*/, res.status(200).json(station)];
                }
            });
        });
    };
    NetworkController.prototype.getRailById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, network_model_1.RailModel.findById(req.params['id'])];
                    case 1:
                        rail = _a.sent();
                        if (!rail) {
                            return [2 /*return*/, res.status(404).json("could not find rail of id: " + req.params['id'])];
                        }
                        return [2 /*return*/, res.status(200).json(rail)];
                }
            });
        });
    };
    return NetworkController;
}());
exports.NetworkController = NetworkController;
