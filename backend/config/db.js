import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb Connected : ${conn.connection.host}`)
  }
  catch (err) {
    console.error(`Connection error : ${err.message}`);
    process.exit(1) // 1 means failure 0 means success
  }
}