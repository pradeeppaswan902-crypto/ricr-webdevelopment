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

app.use((err, req,res, next)=>{
 const errormassage=  err.message || "internal Error";
 const statuscode = err.statusCode || 5000;
 res.status(statuscode).json({message :errormassage})
})

const port = process.env.PORT || 5000;

connectDb();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
