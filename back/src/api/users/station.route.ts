import express, {Request, Response} from 'express';
import {stationController} from './index';

export const station_router = express.Router({
    strict: true
});


station_router.get('/users', (req: Request, res: Response) => {
    console.log("GET /users")
    stationController.getUsers(req, res);
});

station_router.patch('/users/:id', (req: Request, res: Response) => {
    console.log("PATCH /users/:id")
    stationController.patchUser(req, res);
});

station_router.post('/users', (req: Request, res: Response) => {
    console.log("POST /users")
    stationController.postUser(req, res);
});

station_router.delete('/user/:id', (req: Request, res: Response) => {
    console.log("DELETE /users/:id")
    stationController.deleteUserById(req, res);
});

station_router.delete('/users', (req: Request, res: Response) => {
    console.log("DELETE /users")
    stationController.deleteUsers(req, res);
});

