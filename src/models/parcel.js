import { Schema, model } from "mongoose";

const parcelSchema = new Schema(
  {
    customerName: String,
    orderReference: String,
    destination: String,
    comment: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Parcel", parcelSchema);
