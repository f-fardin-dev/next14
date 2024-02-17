import { getPost } from "@app/services/post";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { slug: string } }
) => {
  try {
    const post = await getPost(params.slug);
    return NextResponse.json(post);
  } catch (error) {
    console.error("API: Failed to fetch post ", error);
    throw new Error("API: Failed to fetch post");
  }
};
