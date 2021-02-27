import {Request, Response} from 'express';
import {IIncidenceDayModel, IncidenceDayModel} from "../../lib/incidence_day.model";
import {HospitalDayModel, IHospitalDayModel} from "../../lib/hospital_day.model";
//import * as dep from "../assets/dep.json"
//import * as hospital from "../assets/hospital.json"
import axios from 'axios';

let incidenceHebdoURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_dep_hebdo.json";

export class MockDBController {


    public async clearCollections(req: Request, res: Response) {
        await IncidenceDayModel.deleteMany({});
        await HospitalDayModel.deleteMany({});
        res.status(200).json("All collections cleared");
    }

    public async initDB(req: Request, res: Response) {
        let incidenceHebdoResult = await axios.get(incidenceHebdoURI);
        let incidenceHebdo = incidenceHebdoResult.data;
        await IncidenceDayModel.deleteMany({});
        await HospitalDayModel.deleteMany({});
        console.log("Collections flushed");
        await IncidenceDayModel.insertMany(incidenceHebdo);
      //  await HospitalDayModel.insertMany(hospital.default);

        res.status(200).json("Collections initialized");
    }
}