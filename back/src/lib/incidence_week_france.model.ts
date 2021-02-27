// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IIncidenceWeekFrance} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);



export const IncidenceWeekFranceSchema = new Schema(
    {
        fra: {
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
    }
);


export interface IIncidenceWeekFranceModel extends IIncidenceWeekFrance, mongoose.Document {
}


export const IncidenceWeekFranceModel: Model<IIncidenceWeekFranceModel> = model<IIncidenceWeekFranceModel>("IncidenceWeekFrance", IncidenceWeekFranceSchema);