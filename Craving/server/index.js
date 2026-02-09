import express from "express";
import cloudinary from "./src/config/cloudinary.js"
import connectDb from "./src/config/db.js";
import cors from "cors";
import Router from "./src/routers/router.js";
import RontactRouter from "./src/routers/publicRouter.js";
import UserRouter from "./src/routers/userRouter.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import RestaurantRouter from "./src/routers/restaurantRouter.js";


const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/auth", Router);
app.use("/public", RontactRouter);
app.use("/user", UserRouter);
app.use("/restaurant", RestaurantRouter);

app.get("/", (req, res, next) => {
  res.send("Server working");
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "internal Message error";
  const StatusCode = err.statusCode || 500;
  res.status(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  console.log("Server Starting on port", port);
  connectDb();

  try {
    const res = await cloudinary.api.ping();
    console.log("cloudanay is working", res);
  } catch (error) {
    console.error(" erro connectingr Coludanry api :", error);
  }
});
