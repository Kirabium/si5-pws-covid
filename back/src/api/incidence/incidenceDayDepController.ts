import {Request, Response} from 'express';
import {IncidenceDayDepModel} from "../../lib/incidence_day_dep.model";
import {IIncidenceDayDep} from "../../lib/network.interface";
// @ts-ignore

export class IncidenceDayDepController {
    public async getIncidencesDayDep(req: Request, res: Response) {
        if(req.params.year){
            if(req.params.month){
                if(req.params.day){
                    const regExp = new RegExp("^"+req.params.year+"-"+req.params.month+"-"+req.params.day)
                    return res.status(200).json(await IncidenceDayDepModel.find({jour: regExp}));
                } const regExp = new RegExp("^"+req.params.year+"-"+req.params.month)
                return res.status(200).json(await IncidenceDayDepModel.find({jour: regExp}));
            } const regExp = new RegExp("^"+req.params.year) 
            return res.status(200).json(await IncidenceDayDepModel.find({jour: regExp}));
        } return res.status(200).json(await IncidenceDayDepModel.find());
    }

    public async getIncidencesDayDepByPage(req: Request, res: Response) {
        const pageNum : string = req.params['page_num'];
        const pack_size : number = 20;
        const start : number = pack_size*(Number(pageNum)-1);
        const resultat : IIncidenceDayDep[] = await IncidenceDayDepModel.find().skip(start).limit(pack_size);
        const nextPage : string = `http://localhost:2023/incidence/dep/day/${+pageNum + 1}`;
        const prevPage : any = (+pageNum !== 1)? `http://localhost:2023/incidence/dep/day/${+pageNum - 1}` : null;
        let jsonRes : any = {
            nextPage: nextPage,
            prevPage: prevPage,
            content: resultat
        };
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