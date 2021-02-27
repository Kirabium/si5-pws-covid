import {Request, Response} from 'express';
import {IncidenceDayRegModel} from "../../lib/incidence_day_reg.model";
import {IIncidenceDayReg} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceDayRegController {
    public async getIncidencesDayReg(req: Request, res: Response) {
        return res.status(200).json(await IncidenceDayRegModel.find());
    }

    public async postIncidenceDayReg(req: Request, res: Response) {
        let user: IIncidenceDayReg = req.body;
        let pattern;
        try {
            pattern = await IncidenceDayRegModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceDayReg(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceDay = await IncidenceDayRegModel.findById(req.params['id']);
        if (!currentIncidenceDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceDay = await IncidenceDayRegModel.findByIdAndUpdate(currentIncidenceDay, user, {new: true});
        return res.status(200).json(currentIncidenceDay);
    }

    public async deleteIncidenceDayRegById(req: Request, res: Response) {
        let user = await IncidenceDayRegModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceDayRegModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidencesDayReg(req: Request, res: Response) {
        await IncidenceDayRegModel.deleteMany({});
        return res.status(204).json("IncidenceDays have been all deleted");

    }

    public async getIncidenceDayRegById(req: Request, res: Response) {
        const user = await IncidenceDayRegModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}