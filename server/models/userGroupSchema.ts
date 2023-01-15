import mongoose, { Schema, Document } from "mongoose";

export interface IUserGroup extends Document {
  name: string;
  auth_level: string;
  users: string;
}

const userGroupSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  auth_level: {
    type: String,
    required: true,
  },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export default mongoose.model<IUserGroup>("UserGroup", userGroupSchema);
