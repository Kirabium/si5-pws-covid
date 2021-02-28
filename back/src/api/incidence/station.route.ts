import express, {Request, Response} from 'express';
import {
    incidenceDayDepController,
    incidenceDayFranceController,
    incidenceDayRegController,
    incidenceWeekDepController, incidenceWeekFranceController, incidenceWeekRegController
} from './index';

export const station_router = express.Router({
    strict: true
});

// day dep
station_router.get('/dep/day', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day")
    incidenceDayDepController.getIncidencesDayDep(req, res);
});

station_router.get('/dep/day/:page_num', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:page_num")
    incidenceDayDepController.getIncidencesDayDepByPage(req, res);
});

station_router.get('/dep/day/:year', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:year")
    incidenceDayDepController.getIncidencesDayDep(req, res);
});

station_router.get('/dep/day/:year/:month', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:year/:month")
    incidenceDayDepController.getIncidencesDayDep(req, res);
});

station_router.get('/dep/day/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:year/:month/:day")
    incidenceDayDepController.getIncidencesDayDep(req, res);
});

station_router.get('/dep/day/:year/:month/:day/:age', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:year/:month/:day/:age")
    incidenceDayDepController.getIncidencesDayDep(req, res);
});
station_router.get('/dep/day/:year/:month/:day/:dep', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:year/:month/:day/:dep")
    incidenceDayDepController.getIncidencesDayDepByDepAndDate(req, res);
});
station_router.get('/dep/day/:year/:month/:day/:dep/:age', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/day/:year/:month/:day/:dep/:age")
    incidenceDayDepController.getIncidencesDayDepByDepAndDateAndAge(req, res);
});

station_router.patch('/dep/day/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidence/dep/day/:id")
    incidenceDayDepController.patchIncidenceDayDep(req, res);
});

station_router.post('/dep/day', (req: Request, res: Response) => {
    console.log("POST /incidence/dep/day")
    incidenceDayDepController.postIncidenceDayDep(req, res);
});

station_router.delete('/dep/day/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidence/dep/day/:id")
    incidenceDayDepController.deleteIncidenceDayDepById(req, res);
});

station_router.delete('/dep/day', (req: Request, res: Response) => {
    console.log("DELETE /incidence/dep/day")
    incidenceDayDepController.deleteIncidencesDayDep(req, res);
});

// day france

station_router.get('/france/day', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day")
    incidenceDayFranceController.getIncidencesDayFrance(req, res);
});

station_router.get('/france/day/:page_num', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day/:page_num")
    incidenceDayFranceController.getIncidencesDayFranceByPage(req, res);
});
station_router.get('/france/day/:age', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day/:age")
    incidenceDayFranceController.getIncidencesDayFranceByAge(req, res);
});

station_router.get('/france/day/:year', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day/:year")
    incidenceDayFranceController.getIncidencesDayFrance(req, res);
});

station_router.get('/france/day/:year/:month', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day/:year/:month")
    incidenceDayFranceController.getIncidencesDayFrance(req, res);
});

station_router.get('/france/day/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day/:year/:month/:day")
    incidenceDayFranceController.getIncidencesDayFrance(req, res);
});

station_router.get('/france/day/:year/:month/:day/:age', (req: Request, res: Response) => {
    console.log("GET /incidence/france/day/:year/:month/:day/:age")
    incidenceDayFranceController.getIncidencesDayFrance(req, res);
});

station_router.patch('/france/day/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidence/france/day/:id")
    incidenceDayFranceController.patchIncidenceDayFrance(req, res);
});

station_router.post('/france/day', (req: Request, res: Response) => {
    console.log("POST /incidence/france/day")
    incidenceDayFranceController.postIncidenceDayFrance(req, res);
});

station_router.delete('/france/day/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidence/france/day/:id")
    incidenceDayFranceController.deleteIncidenceDayFranceById(req, res);
});

station_router.delete('/france/day', (req: Request, res: Response) => {
    console.log("DELETE /incidence/france/day")
    incidenceDayFranceController.deleteIncidencesDayFrance(req, res);
});

// day reg

station_router.get('/reg/day', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/day")
    incidenceDayRegController.getIncidencesDayReg(req, res);
});

station_router.get('/reg/day/:page_num', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/day/:page_num")
    incidenceDayRegController.getIncidencesDayRegByPage(req, res);
});

station_router.get('/reg/day/:year', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/day/:year")
    incidenceDayRegController.getIncidencesDayReg(req, res);
});

station_router.get('/reg/day/:year/:month', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/day/:year/:month")
    incidenceDayRegController.getIncidencesDayReg(req, res);
});

station_router.get('/reg/day/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/day/:year/:month/:day")
    incidenceDayRegController.getIncidencesDayReg(req, res);
});

station_router.get('/reg/day/:year/:month/:day/:age', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/day/:year/:month/:day/:age")
    incidenceDayRegController.getIncidencesDayReg(req, res);
});

station_router.patch('/reg/day/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidence/reg/day/:id")
    incidenceDayRegController.patchIncidenceDayReg(req, res);
});

station_router.post('/reg/day', (req: Request, res: Response) => {
    console.log("POST /incidence/reg/day")
    incidenceDayRegController.postIncidenceDayReg(req, res);
});

station_router.delete('/reg/day/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidence/reg/day/:id")
    incidenceDayRegController.deleteIncidenceDayRegById(req, res);
});

station_router.delete('/reg/day', (req: Request, res: Response) => {
    console.log("DELETE /incidence/reg/day")
    incidenceDayRegController.deleteIncidencesDayReg(req, res);
});

//week dep

station_router.get('/dep/week', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/week")
    incidenceWeekDepController.getIncidencesWeekDep(req, res);
});

station_router.get('/dep/week/:page_num', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/week/:page_num")
    incidenceWeekDepController.getIncidencesWeekDepByPage(req, res);
});

station_router.get('/dep/week/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /incidence/dep/week/:year/:month/:day")
    incidenceWeekDepController.getIncidencesWeekDep(req, res);
});

station_router.patch('/dep/week/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidence/dep/week/:id")
    incidenceWeekDepController.patchIncidenceWeekDep(req, res);
});

station_router.post('/dep/week', (req: Request, res: Response) => {
    console.log("POST /incidence/dep/week")
    incidenceWeekDepController.postIncidenceWeekDep(req, res);
});

station_router.delete('/dep/week/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidence/dep/week/:id")
    incidenceWeekDepController.deleteIncidenceWeekDepById(req, res);
});

station_router.delete('/dep/week', (req: Request, res: Response) => {
    console.log("DELETE /incidence/dep/week")
    incidenceWeekDepController.deleteIncidencesWeekDep(req, res);
});

//week france

station_router.get('/france/week', (req: Request, res: Response) => {
    console.log("GET /incidence/france/week")
    incidenceWeekFranceController.getIncidencesWeekFrance(req, res);
});

station_router.get('/france/week/:page_num', (req: Request, res: Response) => {
    console.log("GET /incidence/france/week/:page_num")
    incidenceWeekFranceController.getIncidencesWeekFranceByPage(req, res);
});

station_router.get('/france/week/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /incidence/france/week/:year/:month/:day")
    incidenceWeekFranceController.getIncidencesWeekFrance(req, res);
});

station_router.patch('/france/week/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidence/france/week/:id")
    incidenceWeekFranceController.patchIncidenceWeekFrance(req, res);
});

station_router.post('/france/week', (req: Request, res: Response) => {
    console.log("POST /incidence/france/week")
    incidenceWeekFranceController.postIncidenceWeekFrance(req, res);
});

station_router.delete('/france/week/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidence/france/week/:id")
    incidenceWeekFranceController.deleteIncidenceWeekFranceById(req, res);
});

station_router.delete('/france/week', (req: Request, res: Response) => {
    console.log("DELETE /incidence/france/week")
    incidenceWeekFranceController.deleteIncidencesWeekFrance(req, res);
});

//week reg

station_router.get('/reg/week', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/week")
    incidenceWeekRegController.getIncidencesWeekReg(req, res);
});

station_router.get('/reg/week/:page_num', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/week/:page_num")
    incidenceWeekRegController.getIncidenceWeekRegByPage(req, res);
});

station_router.get('/reg/week/:year/:month/:day', (req: Request, res: Response) => {
    console.log("GET /incidence/reg/week/:year/:month/:day")
    incidenceWeekRegController.getIncidencesWeekReg(req, res);
});

station_router.patch('/reg/week/:id', (req: Request, res: Response) => {
    console.log("PATCH /incidence/reg/week/:id")
    incidenceWeekRegController.patchIncidenceWeekReg(req, res);
});

station_router.post('/reg/week', (req: Request, res: Response) => {
    console.log("POST /incidence/reg/week")
    incidenceWeekRegController.postIncidenceWeekReg(req, res);
});

station_router.delete('/reg/week/:id', (req: Request, res: Response) => {
    console.log("DELETE /incidence/reg/week/:id")
    incidenceWeekRegController.deleteIncidenceWeekRegById(req, res);
});

station_router.delete('/reg/week', (req: Request, res: Response) => {
    console.log("DELETE /incidence/reg/week")
    incidenceWeekRegController.deleteIncidencesWeekReg(req, res);
});

