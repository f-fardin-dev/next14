import { Suspense } from "react";
import styles from "./admin.module.css";
import { PostList } from "@app/components/postList/PostList";
import { PostForm } from "@app/components/postForm/PostForm";
import { UserList } from "@app/components/userList/UserList";
import { UserForm } from "@app/components/userForm/UserForm";
import { auth } from "@app/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>...Loading</div>}>
            <PostList />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>...Loading</div>}>
            <PostForm userId={session?.user.id} />
          </Suspense>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>...Loading</div>}>
            <UserList />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Suspense fallback={<div>...Loading</div>}>
            <UserForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
