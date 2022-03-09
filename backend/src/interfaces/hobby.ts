import { Document } from 'mongoose';

export default interface IHobby extends Document {
    passionLevel: string;
    name: string;
    year: string;
}
