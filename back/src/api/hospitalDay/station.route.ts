import express, {Request, Response} from 'express';
import {hospitalDayController} from './index';

export const station_router = express.Router({
    strict: true
});


station_router.get('/', (req: Request, res: Response) => {
    console.log("GET /hospitalDay")
    hospitalDayController.getHospitalDays(req, res);
});
station_router.get('/france', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/france")
    hospitalDayController.getHospitalDaysFrance(req, res);
});

station_router.get('/:page_num', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/:page_num")
    hospitalDayController.getHospitalDaysByPage(req, res);
});

station_router.get('/:page_num/:sexe', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/:page_num/:sexe")
    hospitalDayController.getHospitalDaysByPage(req, res);
});

station_router.get('/:year', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/:year")
    hospitalDayController.getHospitalDays(req, res);
});

station_router.get('/:year/:month', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/:year/:month")
    hospitalDayController.getHospitalDays(req, res);
});

station_router.get('/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/:year/:month/:day")
    hospitalDayController.getHospitalDays(req, res);
});
station_router.get('/:year/:month/:day/:dep', (req: Request, res: Response) => {
    console.log("GET /hospitalDay/:year/:month/:day/:dep")
    hospitalDayController.getHospitalDaysByDateAndDep(req, res);
});

station_router.patch('/:id', (req: Request, res: Response) => {
    console.log("PATCH /hospitalDay/:id")
    hospitalDayController.patchHospitalDay(req, res);
});

station_router.post('/', (req: Request, res: Response) => {
    console.log("POST /hospitalDay")
    hospitalDayController.postHospitalDay(req, res);
});

station_router.delete('/:id', (req: Request, res: Response) => {
    console.log("DELETE /hospitalDay/:id")
    hospitalDayController.deleteHospitalDayById(req, res);
});

station_router.delete('/', (req: Request, res: Response) => {
    console.log("DELETE /hospitalDay")
    hospitalDayController.deleteHospitalDays(req, res);
});

