// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IHospitalDay, IIncidenceDay} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);



export const HospitalDaySchema = new Schema(
    {
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

    }
);


export interface IHospitalDayModel extends IHospitalDay, mongoose.Document {
}


export const HospitalDayModel: Model<IHospitalDayModel> = model<IHospitalDayModel>("HospitalDay", HospitalDaySchema);