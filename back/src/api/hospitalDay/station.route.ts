import express, {Request, Response} from 'express';
import {hospitalDayController} from './index';

export const station_router = express.Router({
    strict: true
});


station_router.get('/', (req: Request, res: Response) => {
    console.log("GET /hospitalDay")
    hospitalDayController.getHospitalDays(req, res);
});

station_router.patch('/:id', (req: Request, res: Response) => {
    console.log("PATCH /hospitalDay/:id")
    hospitalDayController.patchHospitalDay(req, res);
});

station_router.post('/', (req: Request, res: Response) => {
    console.log("POST /hospitalDay")
    hospitalDayController.postHospitalDay(req, res);
});

station_router.delete('/user/:id', (req: Request, res: Response) => {
    console.log("DELETE /hospitalDay/:id")
    hospitalDayController.deleteHospitalDayById(req, res);
});

station_router.delete('/', (req: Request, res: Response) => {
    console.log("DELETE /hospitalDay")
    hospitalDayController.deleteHospitalDays(req, res);
});

