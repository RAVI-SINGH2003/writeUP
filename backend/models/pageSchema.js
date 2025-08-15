import mongoose from "mongoose";

const pageSchema = new mongoose.Schema(
  {
    pagename: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Page = mongoose.model("Page", pageSchema);
