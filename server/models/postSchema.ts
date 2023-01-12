import mongoose, { Schema, Document } from "mongoose"
import shortid from "shortid"


export interface IPost extends Document {
	shortId: string;
	message: string;
	author: string;
	topis: string;
	timestamp: number;
}



const postSchema: Schema = new Schema({
	shortid: { type: String, default: shortid.generate },
    message: { type: String, required: true, },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
},
{ timestamps: true }
	);

export default mongoose.model<IPost>('Post', postSchema);

