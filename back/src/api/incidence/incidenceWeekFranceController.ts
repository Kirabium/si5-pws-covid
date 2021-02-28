import {Request, Response} from 'express';
import {IncidenceWeekFranceModel} from "../../lib/incidence_week_france.model";
import {IIncidenceWeekFrance} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceWeekFranceController {
    public async getIncidencesWeekFrance(req: Request, res: Response) {
        return res.status(200).json(await IncidenceWeekFranceModel.find());
    }

    public async getIncidencesWeekFranceByPage(req: Request, res: Response) {
        const pageNum : string = req.params['page_num'];
        const pack_size : number = 20;
        const start : number = pack_size*(Number(pageNum)-1);
        const resultat : IIncidenceWeekFrance[] = await IncidenceWeekFranceModel.find().skip(start).limit(pack_size);
        const nextPage : string = `http://localhost:2023/incidence/france/week/${+pageNum + 1}`;
        const prevPage : any = (+pageNum !== 1)? `http://localhost:2023/incidence/france/week/${+pageNum - 1}` : null;
        let jsonRes : any = {
            nextPage: nextPage,
            prevPage: prevPage,
            content: resultat
        };
        return res.status(200).json(jsonRes);
    }

    public async postIncidenceWeekFrance(req: Request, res: Response) {
        let user: IIncidenceWeekFrance = req.body;
        let pattern;
        try {
            pattern = await IncidenceWeekFranceModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceWeekFrance(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceDay = await IncidenceWeekFranceModel.findById(req.params['id']);
        if (!currentIncidenceDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceDay = await IncidenceWeekFranceModel.findByIdAndUpdate(currentIncidenceDay, user, {new: true});
        return res.status(200).json(currentIncidenceDay);
    }

    public async deleteIncidenceWeekFranceById(req: Request, res: Response) {
        let user = await IncidenceWeekFranceModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceWeekFranceModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidencesWeekFrance(req: Request, res: Response) {
        await IncidenceWeekFranceModel.deleteMany({});
        return res.status(204).json("IncidenceDays have been all deleted");

    }

    public async getIncidenceWeekFranceById(req: Request, res: Response) {
        const user = await IncidenceWeekFranceModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}