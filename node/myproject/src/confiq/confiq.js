// import mongoose from "mongoose";
// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDb Connect At ", conn.connection.host);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };
// export default connectDb;

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB Connected At", con.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDb;
