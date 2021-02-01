import {Request, Response} from 'express';
import {UserModel} from "../../lib/network.model";

export class MockDBController {


    public async clearCollections(req: Request, res: Response) {
        await UserModel.deleteMany({});
        res.status(200).json("All collections cleared");
    }

    public async initDB(req: Request, res: Response) {
        await UserModel.deleteMany({});
        console.log("Collections flushed");
        //TODO: add csv read
        res.status(200).json("Collections initialized");
    }
}