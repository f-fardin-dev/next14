import { getUser } from "@app/services/user";
import styles from "./postUser.module.css";
import Image from "next/image";

interface PostUserProps {
  userId: string;
}

export const PostUser = async ({ userId }: PostUserProps) => {
  const user = await getUser(userId);
  return (
    <>
      <Image
        alt="user avatar"
        src={user?.img ?? "/noAvatar.png"}
        width={50}
        height={50}
        className={styles.avatar}
      />
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username ?? "--"}</span>
      </div>
    </>
  );
};
