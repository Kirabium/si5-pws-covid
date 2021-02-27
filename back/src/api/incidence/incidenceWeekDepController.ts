import {Request, Response} from 'express';
import {IncidenceWeekDepModel} from "../../lib/incidence_week_dep.model";
import {IIncidenceWeekDep} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceWeekDepController {
    public async getIncidencesWeekDep(req: Request, res: Response) {
        return res.status(200).json(await IncidenceWeekDepModel.find());
    }

    public async postIncidenceWeekDep(req: Request, res: Response) {
        let user: IIncidenceWeekDep = req.body;
        let pattern;
        try {
            pattern = await IncidenceWeekDepModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceWeekDep(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceWeek = await IncidenceWeekDepModel.findById(req.params['id']);
        if (!currentIncidenceWeek) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceWeek = await IncidenceWeekDepModel.findByIdAndUpdate(currentIncidenceWeek, user, {new: true});
        return res.status(200).json(currentIncidenceWeek);
    }

    public async deleteIncidenceWeekDepById(req: Request, res: Response) {
        let user = await IncidenceWeekDepModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceWeekDepModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidencesWeekDep(req: Request, res: Response) {
        await IncidenceWeekDepModel.deleteMany({});
        return res.status(204).json("IncidenceWeeks have been all deleted");

    }

    public async getIncidenceWeekDepById(req: Request, res: Response) {
        const user = await IncidenceWeekDepModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}