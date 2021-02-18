import express, {Request, Response} from 'express';
import {incidenceDayController} from './index';

export const station_router = express.Router({
    strict: true
});


station_router.get('/', (req: Request, res: Response) => {
    console.log("GET /incidenceDay")
    incidenceDayController.getIncidenceDays(req, res);
});

station_router.patch('/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidenceDay/:id")
    incidenceDayController.patchIncidenceDay(req, res);
});

station_router.post('/', (req: Request, res: Response) => {
    console.log("POST /incidenceDay")
    incidenceDayController.postIncidenceDay(req, res);
});

station_router.delete('/user/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidenceDay/:id")
    incidenceDayController.deleteIncidenceDayById(req, res);
});

station_router.delete('/', (req: Request, res: Response) => {
    console.log("DELETE /incidenceDay")
    incidenceDayController.deleteIncidenceDays(req, res);
});

