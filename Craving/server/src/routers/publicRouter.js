import express from 'express';
import { userContact, GetAllRestaurants, GetRetaurantMenuData } from "../controller/publicControlller.js";

const ContactRouter = express.Router();

// POST route for contact form
ContactRouter.post("/contact", userContact);

// GET route for all restaurants
ContactRouter.get("/allRestaurants", GetAllRestaurants);
ContactRouter.get("/restaurant-menu/:id/:page", GetRetaurantMenuData);

export default ContactRouter;
