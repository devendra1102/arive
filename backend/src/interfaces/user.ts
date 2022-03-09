import { Document, Schema } from 'mongoose';

export default interface IUser extends Document {
    name: string;
    hobbies: [{ type: Schema.Types.ObjectId; ref: 'Hobby' }];
}
