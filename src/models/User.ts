import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}
const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[];
    createdAt: Date;
  }
  const UserSchema: Schema<User> = new Schema({
    username: {
      type: String,
      required: [true,"Username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true,"Email is required"],
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format",
      ]
    },
    password: {
      type: String,
      required: [true,"Password is required"],
    },
    verifyCode: {
      type: String,
      required: [true,"Verify code is required"],
    },
    verifyCodeeExpiry: {
      type: Date,
      required: [true,"Verify code expiry is required"],
    },
    isVerified: {
      type: Boolean,
      required: [true,"Is verified is required"],
      default: false,
    },
    isAcceptingMessages:{
        type:Boolean,
        required:true,
        default:true
    },
    messages: [MessageSchema],
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  });
  const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);
  export default UserModel;