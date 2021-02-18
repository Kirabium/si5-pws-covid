import {Request, Response} from 'express';
import {HospitalDayModel} from "../../lib/hospital_day.model";
import {IHospitalDay} from "../../lib/network.interface";
// @ts-ignore

export class HospitalDayController {
    public async getHospitalDays(req: Request, res: Response) {
        return res.status(200).json(await HospitalDayModel.find());
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