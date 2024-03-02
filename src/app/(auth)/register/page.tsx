import styles from "./register.module.css";
import { RegisterForm } from "@app/components/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
