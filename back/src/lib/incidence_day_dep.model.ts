// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IIncidenceDayDep} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);



export const IncidenceDayDepSchema = new Schema(
    {
        dep: {
            type: String,
            required: true
        },
        jour: {
            type: String,
            required: true
        },
        P: {
            type: Number,
            required: true
        },
        cl_age90: {
            type: Number,
            required: true
        },
        pop: {
            type: Number,
            required: true
        },

    }
);


export interface IIncidenceDayDepModel extends IIncidenceDayDep, mongoose.Document {
}


export const IncidenceDayDepModel: Model<IIncidenceDayDepModel> = model<IIncidenceDayDepModel>("IncidenceDayDep", IncidenceDayDepSchema);