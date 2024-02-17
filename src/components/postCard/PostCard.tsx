import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { IPost } from "@app/types/post.interface";

interface PostCardProps {
  post: IPost;
}

export const PostCard = ({
  post: { title, description, slug, img },
}: PostCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.postImageContainer}>
        <Image
          fill
          className={styles.postImage}
          alt={`image for: ${title}`}
          src={img ?? "/defaultBlog.webp"}
          sizes="100%"
        />
      </div>
      <div className={styles.postInfo}>
        <div className={styles.title} title={title}>
          {title}
        </div>
        <p className={styles.desc}>{description}</p>
        <div className={styles.extraInfo}>
          <small>01.01.2024</small>
          <Link href={`/blog/${slug}`}>READ MORE &#10148;</Link>
        </div>
      </div>
    </div>
  );
};
