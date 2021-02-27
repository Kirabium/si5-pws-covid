// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IIncidenceWeekDep} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);



export const IncidenceWeekDepSchema = new Schema(
    {
        dep: {
            type: String,
            required: true
        },
        week: {
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


export interface IIncidenceWeekDepModel extends IIncidenceWeekDep, mongoose.Document {
}


export const IncidenceWeekDepModel: Model<IIncidenceWeekDepModel> = model<IIncidenceWeekDepModel>("IncidenceWeekDep", IncidenceWeekDepSchema);