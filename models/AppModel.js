import { Schema, model } from "mongoose";

const schema = Schema(
  {
    title: {
      type: String,
      required: [true, "Enter the title"],
    },

    content: {
      type: String,
      required: [true, "Start typing"],
    },

    userId: {
      type: String,
      required: [true, "User Id is Required"],
    },
  },
  {
    timestamps: true,
  }
);

const Model = model("Model", schema);

export default Model;
