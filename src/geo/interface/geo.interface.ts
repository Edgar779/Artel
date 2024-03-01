import { Document } from "mongoose";

export interface IGeo extends Document {
  lat: string;
  lng: string;
  country: string;
  city: string;
}
