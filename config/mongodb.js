
import mongoose from "mongoose";


// create mongodb connection 
export const mongodbConnection = async() => {
      
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongodbConnection successfully Done`.bgBlue.black);
  } catch (error) {
    console.log(`MongodbConnection failed`.bgRed.black);
    
  }
};



















