import styles from "./blog.module.css";
import { PostCard } from "@app/components/postCard/PostCard";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default BlogPage;
