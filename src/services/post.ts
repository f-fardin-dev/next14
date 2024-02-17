import { IPost } from "@app/types/post.interface";
import { Post } from "@app/models/post";
import { connectToDb } from "./db";

export const getPosts = async (): Promise<IPost[]> => {
  try {
    connectToDb();
    return (await Post.find()) as IPost[];
  } catch (error) {
    console.error("Failed to fetch posts: ", error);
    return [];
  }
};

export const getPost = async (slug: string): Promise<IPost | undefined> => {
  try {
    connectToDb();
    return (await Post.findOne({ slug })) as IPost;
  } catch (error) {
    console.error(`Failed to fetch post (slug: ${slug}) : `, error);
  }
};
