import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Hobby from '../models/hobby';
import User from '../models/user';

const NAMESPACE = 'Hobby Controller';

const createHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId, passionLevel, name, year } = req.body;
        const hobby = new Hobby({
            _id: new mongoose.Types.ObjectId(),
            passionLevel,
            name,
            year
        });

        let savedHobby = await hobby.save();
        await User.findByIdAndUpdate({ _id: userId }, { $push: { hobbies: savedHobby._id } }).exec();

        return res.status(200).json({ message: 'Hobby created successfully' });
    } catch (error: any) {
        return res.status(500).json({ message: error.message, error });
    }
};

const deletAHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await Hobby.deleteOne({ _id: req.params.id }).exec();
        return res.status(200).json(results);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            error
        });
    }
};

const editAHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await Hobby.findByIdAndUpdate({ _id: req.params.id }, req.body).exec();
        return res.status(200).json(results);
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            error
        });
    }
};

export default { createHobby, deletAHobby, editAHobby };
