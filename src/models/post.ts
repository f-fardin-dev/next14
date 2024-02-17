import mongoose from "mongoose";
import { IPost } from "@app/types/post.interface";

const postSchema = new mongoose.Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post ?? mongoose.model("Post", postSchema);
