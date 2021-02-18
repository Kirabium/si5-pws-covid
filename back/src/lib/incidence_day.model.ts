// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IIncidenceDay} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);



export const IncidenceDaySchema = new Schema(
    {
        dep: {
            type: Number,
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


export interface IIncidenceDayModel extends IIncidenceDay, mongoose.Document {
}


export const IncidenceDayModel: Model<IIncidenceDayModel> = model<IIncidenceDayModel>("IncidenceDay", IncidenceDaySchema);