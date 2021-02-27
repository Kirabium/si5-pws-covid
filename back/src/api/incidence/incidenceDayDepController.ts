import {Request, Response} from 'express';
import {IncidenceDayDepModel} from "../../lib/incidence_day_dep.model";
import {IIncidenceDayDep} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceDayDepController {
    public async getIncidencesDayDep(req: Request, res: Response) {
        return res.status(200).json(await IncidenceDayDepModel.find());
    }

    public async getIncidencesDayDepByPage(req: Request, res: Response) {
        const resultat = await IncidenceDayDepModel.find();
        const pageNum = req.params['page_num'];
        const pack_size = 20;
        let jsonRes = {
            nbPage: Math.ceil(resultat.length / pack_size),
            nextPage: `http://localhost:2023/incidence/dep/day/${+pageNum + 1}`,
            prevPage: `http://localhost:2023/incidence/dep/day/${+pageNum - 1}`,
            content: resultat
        }
        if(pageNum) {
            const delta = (+pageNum - 1) * pack_size;
            jsonRes.content = jsonRes.content.slice(0 + delta, pack_size + delta);
        }
        return res.status(200).json(jsonRes);
    }

    public async postIncidenceDayDep(req: Request, res: Response) {
        let user: IIncidenceDayDep = req.body;
        let pattern;
        try {
            pattern = await IncidenceDayDepModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchIncidenceDayDep(req: Request, res: Response) {

        let user = req.body;
        let currentIncidenceDay = await IncidenceDayDepModel.findById(req.params['id']);
        if (!currentIncidenceDay) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentIncidenceDay = await IncidenceDayDepModel.findByIdAndUpdate(currentIncidenceDay, user, {new: true});
        return res.status(200).json(currentIncidenceDay);
    }

    public async deleteIncidenceDayDepById(req: Request, res: Response) {
        let user = await IncidenceDayDepModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await IncidenceDayDepModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteIncidencesDayDep(req: Request, res: Response) {
        await IncidenceDayDepModel.deleteMany({});
        return res.status(204).json("IncidenceDays have been all deleted");

    }

    public async getIncidenceDayDepById(req: Request, res: Response) {
        const user = await IncidenceDayDepModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}