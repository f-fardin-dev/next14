"use client";

import { useFormState } from "react-dom";
import { addUser } from "@app/actions";
import { FormState } from "@app/types/form.interface";
import { FormButton } from "../formButton/FormButton";
import styles from "./userForm.module.css";

export const UserForm = () => {
  const [state, formAction] = useFormState(addUser, {} as FormState);

  return (
    <form className={styles.form} action={formAction}>
      <h2>Add New User</h2>
      <input type="text" placeholder="Username" name="username" />
      <input type="text" placeholder="Email" name="email" />
      <input type="text" placeholder="Clear text password" name="password" />
      <input type="text" placeholder="Image" name="img" />
      <select name="isAdmin" defaultValue="none">
        <option value="none" hidden>
          Is Admin?
        </option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <FormButton title="Add" />
      {state?.error && <span className={styles.errorMsg}>{state.error}</span>}
    </form>
  );
};
