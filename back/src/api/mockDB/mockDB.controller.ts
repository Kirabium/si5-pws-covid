import {Request, Response} from 'express';
import {IIncidenceDayDepModel, IncidenceDayDepModel} from "../../lib/incidence_day_dep.model";
import {HospitalDayModel, IHospitalDayModel} from "../../lib/hospital_day.model";
//import * as dep from "../assets/dep.json"
//import * as hospital from "../assets/hospital.json"
import axios from 'axios';
import {IncidenceDayFranceModel} from "../../lib/incidence_day_france.model";
import {IncidenceDayRegModel} from "../../lib/incidence_day_reg.model";
import {IncidenceWeekDepModel} from "../../lib/incidence_week_dep.model";
import {IncidenceWeekFranceModel} from "../../lib/incidence_week_france.model";
import {IncidenceWeekRegModel} from "../../lib/incidence_week_reg.model";

let incidenceDayDepURI =     "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_dep_quoti.json";
let incidenceDayFranceURI =  "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_france_quoti.json";
let incidenceDayRegURI =     "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_region_quoti.json";
let incidenceWeekDepURI =    "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_dep_hebdo.json";
let incidenceWeekFranceURI = "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_france_hebdo.json";
let incidenceWeekRegURI =    "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/incidence_region_hebdo.json";

let hospitalDayURI =    "https://raw.githubusercontent.com/Kirabium/si5-pws-covid/main/json_files/hospital_covid19.json";

export class MockDBController {

    public async cleanAll() {
        await IncidenceDayDepModel.deleteMany({});
        await IncidenceDayFranceModel.deleteMany({});
        await IncidenceDayRegModel.deleteMany({});
        await IncidenceWeekDepModel.deleteMany({});
        await IncidenceWeekFranceModel.deleteMany({});
        await IncidenceWeekRegModel.deleteMany({});
        await HospitalDayModel.deleteMany({});
        console.log("Collections flushed");
    }


    public async clearCollections(req: Request, res: Response) {
        await this.cleanAll();
        res.status(200).json("All collections cleared");
    }

    public async initDB(req: Request, res: Response) {
        await this.cleanAll();
        try {

            let incidenceDayDepResult = await axios.get(incidenceDayDepURI);
            let incidenceDayDep = incidenceDayDepResult.data;
            await IncidenceDayDepModel.insertMany(incidenceDayDep);

            let incidenceDayFranceResult = await axios.get(incidenceDayFranceURI);
            let incidenceDayFrance = incidenceDayFranceResult.data;
            await IncidenceDayFranceModel.insertMany(incidenceDayFrance);

            let incidenceDayRegResult = await axios.get(incidenceDayRegURI);
            let incidenceDayReg = incidenceDayRegResult.data;
            await IncidenceDayRegModel.insertMany(incidenceDayReg);

            let incidenceWeekDepResult = await axios.get(incidenceWeekDepURI);
            let incidenceWeekDep = incidenceWeekDepResult.data;
            await IncidenceWeekDepModel.insertMany(incidenceWeekDep);

            let incidenceWeekFranceResult = await axios.get(incidenceWeekFranceURI);
            let incidenceWeekFrance = incidenceWeekFranceResult.data;
            await IncidenceWeekFranceModel.insertMany(incidenceWeekFrance);

            let incidenceWeekRegResult = await axios.get(incidenceWeekRegURI);
            let incidenceWeekReg = incidenceWeekRegResult.data;
            await IncidenceWeekRegModel.insertMany(incidenceWeekReg);

            let hospitalDayResult = await axios.get(hospitalDayURI);
            let hospitalDay = hospitalDayResult.data;
            await IncidenceWeekRegModel.insertMany(hospitalDay);

        } catch (e) {
            console.log(e)
        }
        //  await HospitalDayModel.insertMany(hospital.default);

        res.status(200).json("Collections initialized");
    }
}