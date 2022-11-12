import { Schema, model } from "mongoose";

export interface UserType {
    name: string;
    email: string;
    password: string;
    role: string;
}

const userSchema = new Schema<UserType>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password:{ type: String, required: true },
        role: {
            type: String,
            enum: ["ADMIN", "THIRD_PARTY"],
            default: "ADMIN",
        },
    },
    { timestamps: true }
);

export const User = model<UserType>("user", userSchema);
