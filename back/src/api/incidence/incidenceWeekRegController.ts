import {Request, Response} from 'express';
import {IncidenceWeekRegModel} from "../../lib/incidence_week_reg.model";
import {IIncidenceWeekReg} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceWeekRegController {
    public async getIncidencesWeekReg(req: Request, res: Response) {
        return res.status(200).json(await IncidenceWeekRegModel.find());
    }

    public async postIncidenceWeekReg(req: Request, res: Response) {
        let user: IIncidenceWeekReg = req.body;
        let pattern;
        try {
            pattern = await IncidenceWeekRegModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceWeekReg(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceDay = await IncidenceWeekRegModel.findById(req.params['id']);
        if (!currentIncidenceDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceDay = await IncidenceWeekRegModel.findByIdAndUpdate(currentIncidenceDay, user, {new: true});
        return res.status(200).json(currentIncidenceDay);
    }

    public async deleteIncidenceWeekRegById(req: Request, res: Response) {
        let user = await IncidenceWeekRegModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceWeekRegModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidencesWeekReg(req: Request, res: Response) {
        await IncidenceWeekRegModel.deleteMany({});
        return res.status(204).json("IncidenceDays have been all deleted");

    }

    public async getIncidenceWeekRegById(req: Request, res: Response) {
        const user = await IncidenceWeekRegModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}