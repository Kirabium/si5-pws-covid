// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IHospitalDay, IIncidenceDayDep} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);


export const HospitalDaySchema = new Schema(
    {

        "dep": {
            type: String,
            required: true
        },
        "sexe": {
            type: Number,
            required: true
        },
        "jour": {
            type: String,
            required: true
        },
        "hosp": {
            type: Number,
            required: true
        },
        "rea": {
            type: Number,
            required: true
        },
        "rad": {
            type: Number,
            required: true
        },
        "dc": {
            type: Number,
            required: true
        }
    }
);


export interface IHospitalDayModel extends IHospitalDay, mongoose.Document {
}


export const HospitalDayModel: Model<IHospitalDayModel> = model<IHospitalDayModel>("HospitalDay", HospitalDaySchema);