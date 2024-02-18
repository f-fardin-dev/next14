import { User } from "@app/models/users";
import { connectToDb } from "./db";
import { IUser } from "@app/types/user.interface";
import { unstable_noStore as noStore } from "next/cache";
import { Profile } from "next-auth";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    connectToDb();
    return (await User.find()) as IUser[];
  } catch (error) {
    console.error("Failed to fetch users: ", error);
    return [];
  }
};

export const getUser = async (userId: string): Promise<IUser | undefined> => {
  noStore();
  try {
    connectToDb();
    return (await User.findById(userId)) as IUser;
  } catch (error) {
    console.error("Failed to fetch user: ", error);
  }
};

export const checkAndRegisterGithubUser = async (
  profile?: Profile
): Promise<boolean> => {
  try {
    if (!profile) {
      return false;
    }
    connectToDb();

    const user = await User.findOne({ email: profile.email });
    if (!user) {
      const newUser = new User({
        username: profile.login,
        email: profile.email,
        img: profile.avatar_url,
      });
      await newUser.save();
    }
    return true;
  } catch (error) {
    console.error("Failed checkAndRegisterUser: ", error);
    return false;
  }
};
