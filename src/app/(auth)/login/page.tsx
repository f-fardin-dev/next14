import { handleGithubLogin } from "@app/actions";
import { LoginForm } from "@app/components/loginForm/LoginForm";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.githubLogin}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
