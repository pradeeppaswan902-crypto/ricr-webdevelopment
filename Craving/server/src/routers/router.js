
import express from "express";
import {userRegister , UserLogin,Logout } from "../controller/userController.js";


const Router = express.Router();

Router.post("/register", userRegister);
Router.post("/login", UserLogin);
Router.get("/logout", Logout);


export default Router;
