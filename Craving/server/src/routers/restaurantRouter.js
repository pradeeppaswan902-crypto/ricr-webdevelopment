import express from "express";
import multer from "multer";

import { RestaurantAddMenuItem,GetRestaurantMenuItem } from "../controller/restaurantController.js";
import { ManagerProtect, Protect } from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer();

router.post(
  "/addMenuItem",
  Protect,
  ManagerProtect,
  upload.array("itemImages", 5),
  RestaurantAddMenuItem,
);

router.get(
  "/menuItems",
  Protect,
  ManagerProtect,
  GetRestaurantMenuItem,
);

export default router;