import {Request, Response} from 'express';
import {IncidenceDayModel} from "../../lib/incidence_day.model";
import {IIncidenceDay} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceDayController {
    public async getIncidenceDays(req: Request, res: Response) {
        return res.status(200).json(await IncidenceDayModel.find());
    }

    public async postIncidenceDay(req: Request, res: Response) {
        let user: IIncidenceDay = req.body;
        let pattern;
        try {
            pattern = await IncidenceDayModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceDay(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceDay = await IncidenceDayModel.findById(req.params['id']);
        if (!currentIncidenceDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceDay = await IncidenceDayModel.findByIdAndUpdate(currentIncidenceDay, user, {new: true});
        return res.status(200).json(currentIncidenceDay);
    }

    public async deleteIncidenceDayById(req: Request, res: Response) {
        let user = await IncidenceDayModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceDayModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidenceDays(req: Request, res: Response) {
        await IncidenceDayModel.deleteMany({});
        return res.status(204).json("IncidenceDays have been all deleted");

    }

    public async getIncidenceDayById(req: Request, res: Response) {
        const user = await IncidenceDayModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}