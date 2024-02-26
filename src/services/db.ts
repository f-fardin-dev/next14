import mongoose from "mongoose";

const connection = { isConnected: 0 };

export const connectToDb = async () => {
  try {
    // This is useful in the development mode
    if (connection.isConnected) {
      console.warn("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO ?? "");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(`Error Connect to DB : ${error}`);
  }
};
