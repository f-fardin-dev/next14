"use client";

import { useFormState } from "react-dom";
import { addPost } from "@app/actions";
import { FormState } from "@app/types/form.interface";
import { FormButton } from "../formButton/FormButton";
import styles from "./postForm.module.css";

interface PostFormProps {
  userId: string;
}
export const PostForm = ({ userId }: PostFormProps) => {
  const [state, formAction] = useFormState(addPost, {} as FormState);

  return (
    <form className={styles.form} action={formAction}>
      <h2>Add New Post</h2>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Unique Slug" name="slug" />
      <input
        type="text"
        placeholder="Images from [images.pexels.com] domain"
        name="img"
      />
      <textarea rows={10} placeholder="Description" name="description" />
      <FormButton title="Add" />
      {state?.error && <span className={styles.errorMsg}>{state.error}</span>}
    </form>
  );
};
