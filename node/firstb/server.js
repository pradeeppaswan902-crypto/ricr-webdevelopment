import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from "./src/config/db.js";
import AuthRouter from './src/routers/myRouter.js'

const app = express();

app.use(express.json());
app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({ message: "Get Started" });
});

const port = process.env.PORT || 5000;

connectDb();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
