import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const NAMESPACE = 'User Controller';

const createUser = (req: Request, res: Response, next: NextFunction) => {
    let { name } = req.body;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name
    });
    return user
        .save()
        .then((result) => {
            return res.status(201).json({
                user: result
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await User.find().populate('hobbies').exec();
        return res.status(200).json({
            users: results,
            count: results.length
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            error
        });
    }
};

const getAUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await User.findById({ _id: req.params.userid }).populate('hobbies').exec();
        return res.status(200).json(results);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            error
        });
    }
};

const deletAUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await User.deleteOne({ _id: req.params.userid }).exec();
        return res.status(200).json(results);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            error
        });
    }
};

export default { getAllUsers, createUser, getAUser, deletAUser };
