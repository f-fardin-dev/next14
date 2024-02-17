import { User } from "@app/models/users";
import { connectToDb } from "./db";
import { IUser } from "@app/types/user.interface";
import { unstable_noStore as noStore } from "next/cache";

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
