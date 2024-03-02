"use client";

import { useFormState } from "react-dom";
import { loginUser } from "@app/actions";
import { FormState } from "@app/types/form.interface";
import { FormButton } from "../formButton/FormButton";
import Link from "next/link";
import styles from "./loginForm.module.css";

export const LoginForm = () => {
  const [state, formAction] = useFormState(loginUser, {} as FormState);

  return (
    <form className={styles.form} action={formAction}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        autoComplete="disable"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        autoComplete="current-password"
      />
      <FormButton title="Login" />
      {state?.error && <span className={styles.errorMsg}>{state.error}</span>}
      <Link className={styles.loginLink} href="/register">
        {`Don't have an account?`} <b>Register</b>
      </Link>
    </form>
  );
};
