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
exports.IncidenceWeekRegModel = exports.IncidenceWeekRegSchema = void 0;
// @ts-ignore
var mongoose_1 = __importStar(require("mongoose"));
var MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose_1.default);
exports.IncidenceWeekRegSchema = new mongoose_1.Schema({
    reg: {
        type: String,
        required: true
    },
    week: {
        type: String,
        required: true
    },
    P_f: {
        type: Number,
        required: true
    },
    P_h: {
        type: Number,
        required: true
    },
    P: {
        type: Number,
        required: true
    },
    pop_f: {
        type: Number,
        required: true
    },
    pop_h: {
        type: Number,
        required: true
    },
    cl_age90: {
        type: String,
        required: true
    },
    pop: {
        type: Number,
        required: true
    }
});
exports.IncidenceWeekRegModel = mongoose_1.model("IncidenceWeekReg", exports.IncidenceWeekRegSchema);
