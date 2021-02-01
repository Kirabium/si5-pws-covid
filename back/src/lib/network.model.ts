// @ts-ignore
import mongoose, {Model, model, Schema, Document} from 'mongoose';
import {IUser} from "./network.interface";


const MongooseSchemaJsonSchema = require("mongoose-schema-jsonschema");
MongooseSchemaJsonSchema(mongoose);



export const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

    }
);


export interface IUserModel extends IUser, mongoose.Document {
}


export const UserModel: Model<IUserModel> = model<IUserModel>("User", UserSchema);