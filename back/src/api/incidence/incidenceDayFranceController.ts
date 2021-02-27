import {Request, Response} from 'express';
import {IncidenceDayFranceModel} from "../../lib/incidence_day_france.model";
import {IIncidenceDayFrance} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceDayFranceController {
    public async getIncidencesDayFrance(req: Request, res: Response) {
        return res.status(200).json(await IncidenceDayFranceModel.find());
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