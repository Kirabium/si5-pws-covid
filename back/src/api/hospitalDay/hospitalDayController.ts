import {Request, Response} from 'express';
import {HospitalDayModel} from "../../lib/hospital_day.model";
import {IHospitalDay} from "../../lib/network.interface";
// @ts-ignore

export class HospitalDayController {
    public async getHospitalDays(req: Request, res: Response) {
        if(req.params.year){
            if(req.params.month){
                if(req.params.day)
                    return res.status(200).json(await HospitalDayModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day}}));
                return res.status(200).json(await HospitalDayModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month}}));
            } return res.status(200).json(await HospitalDayModel.find({jour: {$regex: "^"+req.params.year}}));
        } return res.status(200).json(await HospitalDayModel.find());
    }

    public async getHospitalDaysByPage(req: Request, res: Response) {
        const pageNum : string = req.params['page_num'];
        const sexe : number = req.params['sexe'] ? Number(req.params['sexe']) : 0;
        const pack_size : number = 20;
        const start : number = pack_size*(Number(pageNum)-1);
        const resultat : IHospitalDay[] = await HospitalDayModel.find({sexe:sexe}).skip(start).limit(pack_size);
        const nextPage : string = `http://localhost:2023/hospitalDay/${+pageNum + 1}`;
        const prevPage : any = (+pageNum !== 1)? `http://localhost:2023/hospitalDay/${+pageNum - 1}` : null;
        let jsonRes : any = {
            nextPage: nextPage,
            prevPage: prevPage,
            content: resultat
        };
        return res.status(200).json(jsonRes);
    }

    public async postHospitalDay(req: Request, res: Response) {
        let user: IHospitalDay = req.body;
        let pattern;
        try {
            pattern = await HospitalDayModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchHospitalDay(req: Request, res: Response) {

        let user = req.body;
        let currentHospitalDay = await HospitalDayModel.findById(req.params['id']);
        if (!currentHospitalDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentHospitalDay = await HospitalDayModel.findByIdAndUpdate(currentHospitalDay, user, {new: true});
        return res.status(200).json(currentHospitalDay);
    }

    public async deleteHospitalDayById(req: Request, res: Response) {
        let user = await HospitalDayModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await HospitalDayModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteHospitalDays(req: Request, res: Response) {
        await HospitalDayModel.deleteMany({});
        return res.status(204).json("HospitalDays have been all deleted");

    }

    public async getHospitalDayById(req: Request, res: Response) {
        const user = await HospitalDayModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}