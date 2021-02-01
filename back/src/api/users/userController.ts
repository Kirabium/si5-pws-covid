import {Request, Response} from 'express';
import {UserModel} from "../../lib/network.model";
import {IUser} from "../../lib/network.interface";
// @ts-ignore

export class UserController {
    public async getUsers(req: Request, res: Response) {
        return res.status(200).json(await UserModel.find());
    }

    public async postUser(req: Request, res: Response) {
        let user: IUser = req.body;
        let pattern;
        try {
            pattern = await UserModel.create(user);
        } catch (error) {
            return res.status(400).json(error);
        }
        return res.status(201).json(pattern);
    }

    public async patchUser(req: Request, res: Response) {

        let user = req.body;
        let currentUser = await UserModel.findById(req.params['id']);
        if (!currentUser) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        currentUser = await UserModel.findByIdAndUpdate(currentUser, user, {new: true});
        return res.status(200).json(currentUser);
    }

    public async deleteUserById(req: Request, res: Response) {
        let user = await UserModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("Could not find user with id " + req.params['id']);
        }
        await UserModel.deleteOne(user!);
        return res.status(204).json();
    }

    public async deleteUsers(req: Request, res: Response) {
        await UserModel.deleteMany({});
        return res.status(204).json("Users have been all deleted");

    }

    public async getUserById(req: Request, res: Response) {
        const user = await UserModel.findById(req.params['id']);
        if (!user) {
            return res.status(404).json("could not find user of id: " + req.params['id']);
        }
        return res.status(200).json(user);
    }
}