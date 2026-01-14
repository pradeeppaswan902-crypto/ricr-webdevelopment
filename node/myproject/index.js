import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDb from './src/confiq/confiq.js' ;
import Authrouter from "./src/routers/router.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", Authrouter);


app.get("/", (req, res) => {
  res.json({ message: "Server Start" });
});

const port = process.env.PORT || 5000;


connectDb().then(() => {
  app.listen(port, () => {
    console.log("Server Started On Port", port);
  });
});
