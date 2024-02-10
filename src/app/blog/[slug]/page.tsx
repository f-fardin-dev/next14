import Image from "next/image";
import styles from "./singlePostPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postImgContainer}>
        <Image
          fill
          sizes="30vw"
          alt="post image"
          src="https://images.pexels.com/photos/18369349/pexels-photo-18369349/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className={styles.postImg}
        />
      </div>
      <div className={styles.postInfoContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.details}>
          <Image
            alt="avatar"
            src="https://images.pexels.com/photos/18369349/pexels-photo-18369349/free-photo-of-tet-holiday-in-vietnam.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.info}>
            <span className={styles.infoLabel}>Author</span>
            <span className={styles.infoValue}>Terry Jefferson</span>
          </div>
          <div className={styles.info}>
            <span className={styles.infoLabel}>Published</span>
            <span className={styles.infoValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
          cupiditate temporibus minima iusto aliquid nihil repellendus, quaerat
          consectetur optio doloremque ipsa facere unde labore sequi ea sit!
          Fugiat, minima deserunt!
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
