import { registerUser } from "@app/actions";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={registerUser}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          autoComplete="disable"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="disable"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="new-password"
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="passwordRepeat"
          autoComplete="new-password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
