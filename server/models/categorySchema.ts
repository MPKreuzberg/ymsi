import mongoose, { Schema, Document } from 'mongoose';



export interface ICategory extends Document {
  name: string;
  subcategories: string[];
}


const categorySchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subcategory' }],
  });
  
  
  
  export default mongoose.model<ICategory>('Category', categorySchema);