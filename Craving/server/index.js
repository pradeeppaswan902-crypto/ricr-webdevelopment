import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/config/db.js";
import cors from "cors";
import Router from "./src/routers/router.js";
import RontactRouter from "./src/routers/contactRouter.js"
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials:true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", Router);
app.use("/contactapi", RontactRouter);

app.get("/", (req, res, next) => {
  res.send("Server working");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "internal Message error";
  const StatusCode = err.statusCode || 500;
  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Starting on port", port);
  connectDb();
});
