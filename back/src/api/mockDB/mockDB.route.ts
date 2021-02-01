import express, {Request, Response} from 'express';
import {mockDBController} from './index';

export const mockDB_router = express.Router({
    strict: true
});

mockDB_router.post('/init', (req: Request, res: Response) => {
    console.log("POST /db/init")
    mockDBController.initDB(req, res);
});

mockDB_router.delete('/flush', (req: Request, res: Response) => {
    console.log("DELETE /db/flush")
    mockDBController.clearCollections(req, res);
});

