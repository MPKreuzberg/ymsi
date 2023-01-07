import mongoose, { Schema, Document } from "mongoose"

export interface IPost extends Document {
    title: string;
    createdAt: Date;
    updatedAt: Date;
}

const postSchema: Schema = new Schema({
    title: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPost>('Post', postSchema);

