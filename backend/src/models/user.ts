import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        hobbies: [{ type: Schema.Types.ObjectId, ref: 'Hobby' }]
    },
    { timestamps: true }
);

export default mongoose.model<IUser>('User', UserSchema);
