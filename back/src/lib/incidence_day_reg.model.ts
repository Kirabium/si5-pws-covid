// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IIncidenceDayReg} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);


export const IncidenceDayRegSchema = new Schema(
    {
        reg: {
            type: String,
            required: true
        },
        jour: {
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
    }
);


export interface IIncidenceDayRegModel extends IIncidenceDayReg, mongoose.Document {
}


export const IncidenceDayRegModel: Model<IIncidenceDayRegModel> = model<IIncidenceDayRegModel>("IncidenceDayReg", IncidenceDayRegSchema);