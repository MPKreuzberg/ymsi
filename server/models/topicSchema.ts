import mongoose, { Schema, Document }  from 'mongoose'

export interface ITopic extends Document {
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const topicSchema: Schema = new Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<ITopic>('Topic', topicSchema);

