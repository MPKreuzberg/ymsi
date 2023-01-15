import mongoose, { Schema, Document } from 'mongoose';
import shortid from 'shortid';

export interface ISubcategory extends Document {
  shortid: string;
  name: string;
  description: string;
  category: string;
  lastpost: string;
  topics: string[];
}


const subcategorySchema = new Schema({
    shortid: {
      type: String,
      unique: true,
      default: shortid.generate,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    lastpost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    topics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
      },
    ],
  });
  
  
  
  export default mongoose.model<ISubcategory>('Subcategory', subcategorySchema);