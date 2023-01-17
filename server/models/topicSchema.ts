import mongoose, { Schema, Document }  from 'mongoose'
import shortid from 'shortid'



export interface ITopic extends Document {
	shortId: string;
    title: string;
    subtitle: string;
	subcategory: string;
	author: string;
	posts: string;
	lastpost:string;
	timestamp: number;
}

const topicSchema: Schema = new Schema({
	shortId: { type: String, default: shortid.generate },
    title: { type: String, required: true, },
	subtitle: { type: String, required: false, },
	subcategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' },
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
	lastpost: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    },
	{ timestamps: true }
);

export default mongoose.model<ITopic>('Topic', topicSchema);

