import mongoose, { Schema, model } from "mongoose";

export interface LgaType {
    name: string;
    state: any;
}

const LgaSchema = new Schema<LgaType>(
    {
        name: { type: String, required: true },
        state: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "state",
            required: true,
        },
    },
    { timestamps: true }
);

export const Lga = model<LgaType>("lga", LgaSchema);
