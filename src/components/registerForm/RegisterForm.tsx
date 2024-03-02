"use client";

import { useFormState } from "react-dom";
import { registerUser } from "@app/actions";
import { FormState } from "@app/types/form.interface";
import styles from "./registerForm.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { FormButton } from "../formButton/FormButton";

export const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(registerUser, {} as FormState);

  useEffect(() => {
    state?.success && router.push("/login");
  }, [router, state?.success]);

  return (
    <form className={styles.form} action={formAction}>
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
      <FormButton title="Register" />
      {state?.error && <span className={styles.errorMsg}>{state.error}</span>}
      <Link className={styles.loginLink} href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};
