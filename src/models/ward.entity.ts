import mongoose, { Schema, model } from "mongoose";

export interface WardType {
    name: string;
    lga: any;
}

const WardSchema = new Schema<WardType>(
    {
        name: { type: String, required: true },
        lga: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "lga",
            required: true,
        },
    },
    { timestamps: true }
);

export const Ward = model<WardType>("ward", WardSchema);
