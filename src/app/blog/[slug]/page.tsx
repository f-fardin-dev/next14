import Image from "next/image";
import styles from "./singlePostPage.module.css";
import { getPostApi } from "@app/services/post";
import { PostUser } from "@app/components/postUser/PostUser";
import { Suspense } from "react";

interface SinglePostPageProps {
  params: { slug: string };
}

export const generateMetadata = async ({ params }: SinglePostPageProps) => {
  const post = await getPostApi(params.slug);
  return {
    title: post?.title,
    description: post?.description,
  };
};

const SinglePostPage = async ({ params }: SinglePostPageProps) => {
  const post = await getPostApi(params.slug);
  if (!post) {
    return <div>Error getting post data</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.postImgContainer}>
        <Image
          fill
          sizes="30vw"
          alt="post image"
          src={post?.img ?? "/defaultBlog.webp"}
          className={styles.postImg}
        />
      </div>
      <div className={styles.postInfoContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          <Suspense fallback={<span>... Loading</span>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.info}>
            <span className={styles.infoLabel}>Published</span>
            <span className={styles.infoValue}>
              {new Date(post.createdAt).toString().slice(4, 15)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
