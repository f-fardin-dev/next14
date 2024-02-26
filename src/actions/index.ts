"use server";

import { signIn, signOut } from "@app/auth";
import { User } from "@app/models/users";
import { connectToDb } from "@app/services/db";

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleLogout = async () => {
  await signOut();
};

export const registerUser = async (formData: FormData) => {
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
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};

export const loginUser = async (formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
