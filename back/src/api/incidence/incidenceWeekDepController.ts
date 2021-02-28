import {Request, Response} from 'express';
import {IncidenceWeekDepModel} from "../../lib/incidence_week_dep.model";
import {IIncidenceWeekDep} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceWeekDepController {
    public async getIncidencesWeekDep(req: Request, res: Response) {
        return res.status(200).json(await IncidenceWeekDepModel.find());
    }

    public async getIncidencesWeekDepByPage(req: Request, res: Response) {
        const pageNum : string = req.params['page_num'];
        const pack_size : number = 20;
        const start : number = pack_size*(Number(pageNum)-1);
        const resultat : IIncidenceWeekDep[] = await IncidenceWeekDepModel.find().skip(start).limit(pack_size);
        const nextPage : string = `http://localhost:2023/incidence/dep/week/${+pageNum + 1}`;
        const prevPage : any = (+pageNum !== 1)? `http://localhost:2023/incidence/dep/week/${+pageNum - 1}` : null;
        let jsonRes : any = {
            nextPage: nextPage,
            prevPage: prevPage,
            content: resultat
        };
        return res.status(200).json(jsonRes);
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