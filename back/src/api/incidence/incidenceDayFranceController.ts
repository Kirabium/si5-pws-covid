import {Request, Response} from 'express';
import {IncidenceDayFranceModel} from "../../lib/incidence_day_france.model";
import {IIncidenceDayFrance} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceDayFranceController {
    public async getIncidencesDayFrance(req: Request, res: Response) {
        if(req.params.year){
            if(req.params.month){
                if(req.params.day)
                    return res.status(200).json(await IncidenceDayFranceModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month+"-"+req.params.day}}));
                return res.status(200).json(await IncidenceDayFranceModel.find({jour: {$regex: "^"+req.params.year+"-"+req.params.month}}));
            } return res.status(200).json(await IncidenceDayFranceModel.find({jour: {$regex: "^"+req.params.year}}));
        } return res.status(200).json(await IncidenceDayFranceModel.find());
    }

    public async getIncidencesDayFranceByPage(req: Request, res: Response) {
        const pageNum : string = req.params['page_num'];
        const pack_size : number = 20;
        const start : number = pack_size*(Number(pageNum)-1);
        const resultat : IIncidenceDayFrance[] = await IncidenceDayFranceModel.find().skip(start).limit(pack_size);
        const nextPage : string = `http://localhost:2023/incidence/france/day/${+pageNum + 1}`;
        const prevPage : any = (+pageNum !== 1)? `http://localhost:2023/incidence/france/day/${+pageNum - 1}` : null;
        let jsonRes : any = {
            nextPage: nextPage,
            prevPage: prevPage,
            content: resultat
        };
        return res.status(200).json(jsonRes);
    }

    public async postIncidenceDayFrance(req: Request, res: Response) {
        let user: IIncidenceDayFrance = req.body;
        let pattern;
        try {
            pattern = await IncidenceDayFranceModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceDayFrance(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceDay = await IncidenceDayFranceModel.findById(req.params['id']);
        if (!currentIncidenceDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceDay = await IncidenceDayFranceModel.findByIdAndUpdate(currentIncidenceDay, user, {new: true});
        return res.status(200).json(currentIncidenceDay);
    }

    public async deleteIncidenceDayFranceById(req: Request, res: Response) {
        let user = await IncidenceDayFranceModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceDayFranceModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidencesDayFrance(req: Request, res: Response) {
        await IncidenceDayFranceModel.deleteMany({});
        return res.status(204).json("IncidenceDays have been all deleted");

    }

    public async getIncidenceDayFranceById(req: Request, res: Response) {
        const user = await IncidenceDayFranceModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}