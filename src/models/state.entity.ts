import mongoose, { Schema, model } from "mongoose";

export interface StateType {
    name: string;
}

const StateSchema = new Schema<StateType>(
    {
        name: { type: String, required: true },
    },
    { timestamps: true }
);

export const State = model<StateType>("State", StateSchema);
