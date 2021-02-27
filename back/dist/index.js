"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var station_route_1 = require("./api/hospitalDay/station.route");
var station_route_2 = require("./api/incidence/station.route");
var mockDB_route_1 = require("./api/mockDB/mockDB.route");
var mongoose_1 = __importDefault(require("mongoose"));
//mongoose.connect("mongodb://localhost:27017/network", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose_1.default.connect("mongodb://mongo:27017/network", { useNewUrlParser: true, useUnifiedTopology: true });
var app = express_1.default();
app.use(express_1.default.json());
app.use('/hospitalDay', station_route_1.station_router);
app.use('/incidence', station_route_2.station_router);
app.use('/db', mockDB_route_1.mockDB_router);
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(2023, function () {
    console.log("Server is listening on port 2023");
});
