import {Request, Response} from 'express';
import {IncidenceDayFranceModel} from "../../lib/incidence_day_france.model";
import {IncidenceDayDepModel} from "../../lib/incidence_day_dep.model";
import {HospitalDayModel} from "../../lib/hospital_day.model";

export class VisualisationContoller {
    public async getIVisualisationMapAndStats(req: Request, res: Response) {
        const casFranceByDate = await IncidenceDayFranceModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day},cl_age90: Number(req.params.age)});
        const listCasDepByDate= await IncidenceDayDepModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day}, cl_age90 : Number(req.params.age)});   
        // stat dep
        const  CasDepByDate= await IncidenceDayDepModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day}, dep: req.params.dep, cl_age90 :Number(req.params.age)});
        const  HospitalByDepAndDate = await HospitalDayModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day}, dep: req.params.dep});
        //donut
        const listCasFranceByAge= await IncidenceDayDepModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day}});
        
        let jsonRes = {
            casFranceByDate: casFranceByDate,
            listCasDepByDate:listCasDepByDate,
            CasDepByDate: CasDepByDate,
            HospitalByDepAndDate: HospitalByDepAndDate,
            listCasFranceByAge: listCasFranceByAge,
        }   
        return res.status(200).json(jsonRes);  
    }
}