import express, {Request, Response} from 'express';
import {visualisationContoller} from './index';

export const station_router = express.Router({
    strict: true
});

//visualisation 
station_router.get('/:year/:month/:day/:dep/:age', (req: Request, res: Response) => {
    console.log("GET /visual/:year/:month/:day/:dep/:age")
    visualisationContoller.getIVisualisationMapAndStats(req, res);
});