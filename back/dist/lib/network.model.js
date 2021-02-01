"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RailModel = exports.StationModel = exports.StationSchema = exports.RailSchema = void 0;
// @ts-ignore
var mongoose_1 = __importStar(require("mongoose"));
var network_interface_1 = require("./network.interface");
var MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose_1.default);
exports.RailSchema = new mongoose_1.Schema({
    start: {
        type: network_interface_1.NetworkStation,
        required: true
    },
    end: {
        type: network_interface_1.NetworkStation,
        required: true
    },
    stations: {
        type: Array,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
});
exports.StationSchema = new mongoose_1.Schema({
    name: {
        type: network_interface_1.NetworkStation,
        required: true
    },
});
exports.StationModel = mongoose_1.model("Station", exports.StationSchema);
exports.RailModel = mongoose_1.model("Rail", exports.RailSchema);
