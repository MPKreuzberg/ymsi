import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document {
    userName:string;
    password:string;
    email:string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUser>('User', userSchema);

// Path: server/controllers/users.ts
