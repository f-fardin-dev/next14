"use server";

import { signIn, signOut } from "@app/auth";
import { User } from "@app/models/users";
import { connectToDb } from "@app/services/db";
import { FormState } from "@app/types/form.interface";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const registerUser = async (
  prevState: FormState,
  formData: FormData
) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "The passwords do not match." };
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exists!" };
    }

    // const salt = await bcrypt.genSalt(10);
    // const hPassword = await bcrypt.hash(password as string, salt);
    const hPassword = `${password}&${username}`;
    const newUser = new User({ username, email, img, password: hPassword });
    await newUser.save();
    console.log("User created");
    return { success: true };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const loginUser = async (prevState: FormState, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
    return { success: true };
  } catch (error) {
    if ((error as Record<string, unknown>).type === "CredentialsSignin") {
      return { error: "Wrong credentials!" };
    }
    throw error;
  }
};
