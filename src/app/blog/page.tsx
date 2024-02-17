import styles from "./blog.module.css";
import { PostCard } from "@app/components/postCard/PostCard";
import { getPosts } from "@app/services/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page",
  description: "You can see some sample blog data here",
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
