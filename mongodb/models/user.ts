import { Schema, model, models } from "mongoose";

export interface IUser  {
    userId: string;
    firstName: string;
    lastName?: string;
    email: any;
}

const UserSchema = new Schema<IUser>({
    userId: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
})

export const User = models?.User || model("User", UserSchema);