import mongoose, { Schema } from 'mongoose';
import IHobby from '../interfaces/hobby';

const HobbySchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        passionLevel: { type: String, required: true },
        year: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model<IHobby>('Hobby', HobbySchema);
