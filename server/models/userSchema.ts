import mongoose, {Schema, Document} from 'mongoose';

export interface IUser extends Document {
    userName:string;
    password:string;
    email:string;
	registerDate:number;
   	avatar: string;
	usergroup: string;
	posts: number;
	topics: number;
}

;
//user structure
const userSchema: Schema = new Schema({
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
	avatar: { type: String, required: false },
	usergroup: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
		topics: [{
			type: mongoose.Schema.Types.ObjectId, ref: 'Topic'}],
			bio: String,
			registerdate:{ type: Date, default: Date.now },
    });


export default mongoose.model<IUser>('User', userSchema);


