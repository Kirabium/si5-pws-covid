import {Request, Response} from 'express';
import {IIncidenceDayModel, IncidenceDayModel} from "../../lib/incidence_day.model";
import {HospitalDayModel, IHospitalDayModel} from "../../lib/hospital_day.model";
//import * as dep from "../assets/dep.json"
//import * as hospital from "../assets/hospital.json"

export class MockDBController {


    public async clearCollections(req: Request, res: Response) {
        await IncidenceDayModel.deleteMany({});
        await HospitalDayModel.deleteMany({});
        res.status(200).json("All collections cleared");
    }

    public async initDB(req: Request, res: Response) {
        await IncidenceDayModel.deleteMany({});
        await HospitalDayModel.deleteMany({});
        console.log("Collections flushed");
      //  await IncidenceDayModel.insertMany(dep.default);
      //  await HospitalDayModel.insertMany(hospital.default);

        res.status(200).json("Collections initialized");
    }
}