import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import Auth from "./src/routers/router.js";
import connectDb from "./src/config/db.js";

const app = express();
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json("Code Working");
});

app.use("/auth", Auth);

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "Internal Server Error";
  const ErrorCode = err.statusCode || 500;
  res.status(ErrorCode).json({ message: ErrorMessage });
});

app.listen(port, () => {
  console.log("Server Started On Port", port);
  connectDb();
});
