import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

export const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postImage}>
        <Image
          fill
          alt="post card image"
          src="https://images.pexels.com/photos/18369349/pexels-photo-18369349/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          objectFit="cover"
        />
      </div>
      <div className={styles.postInfo}>
        <div className={styles.title}>Title</div>
        <p className={styles.desc}>Description</p>
        <div className={styles.extraInfo}>
          <small>01.01.2024</small>
          <Link href="/blog/post">READ MORE &#10148;</Link>
        </div>
      </div>
    </div>
  );
};
