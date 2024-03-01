import { Schema, model, Types } from "mongoose";
import { IGeo } from "./interface";

const GeoSchema = new Schema(
  {
    authors: [{ type: Types.ObjectId, ref: "user" }],
    genre: { type: Types.ObjectId, ref: "genre" },
    name: { type: String, unique: true },
    publishDate: { type: Date },
    editor: { type: String },
  },
  { timestamps: true }
);

export const GeoModel = model<IGeo>("geo", GeoSchema);
