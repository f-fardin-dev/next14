import mongoose from "mongoose";


export const connectToDb = async () => {
  try {
    // This is useful in the development mode
    if(mongoose.connection.readyState === 1 ){
      console.warn("Using the existing connection");
      return;
    }

    await mongoose.connect(process.env.MONGO ?? "");
    console.warn("Connect to the DB successfully");
    
  } catch (error) {
    throw new Error(`Error Connect to DB : ${error}`);
  }
};
