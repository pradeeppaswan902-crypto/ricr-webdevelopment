import express from "express";
import {
  
  GetAllRestaurants,
  GetRetaurantMenuData,
} from "../controller/publicControlller.js";

const router = express.Router();


router.get("/allRestaurants", GetAllRestaurants);
router.get("/restaurant/menu/:id", GetRetaurantMenuData);
export default router;