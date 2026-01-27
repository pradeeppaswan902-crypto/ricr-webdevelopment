
import express from "express";
import {UserRegister , UserLogin,UserLogout } from "../controller/userController.js";


const Router = express.Router();

Router.post("/register", UserRegister);
Router.post("/login", UserLogin);
Router.get("/logout", UserLogout);


export default Router;
