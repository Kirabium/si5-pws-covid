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
exports.HospitalDayModel = exports.HospitalDaySchema = void 0;
// @ts-ignore
var mongoose_1 = __importStar(require("mongoose"));
var MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose_1.default);
exports.HospitalDaySchema = new mongoose_1.Schema({
    jour: {
        type: String,
        required: true
    },
    nomReg: {
        type: String,
        required: true
    },
    numReg: {
        type: Number,
        required: true
    },
    incid_rea: {
        type: Number,
        required: true
    },
});
exports.HospitalDayModel = mongoose_1.model("HospitalDay", exports.HospitalDaySchema);
