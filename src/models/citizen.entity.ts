import mongoose, { Schema, model } from "mongoose";

export interface CitizenType {
    fullName: string;
    address: string;
    phone: string;
    gender: string;
    ward: any;
}

const CitizenSchema = new Schema<CitizenType>(
    {
        fullName: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        gender: { type: String, required: true },
        ward: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ward",
            required: true,
        },
    },
    { timestamps: true }
);

export const Citizen = model<CitizenType>("citizen", CitizenSchema);
