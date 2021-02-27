import {Request, Response} from 'express';
import {IncidenceWeekFranceModel} from "../../lib/incidence_week_france.model";
import {IIncidenceWeekFrance} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceWeekFranceController {
    public async getIncidencesWeekFrance(req: Request, res: Response) {
        return res.status(200).json(await IncidenceWeekFranceModel.find());
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