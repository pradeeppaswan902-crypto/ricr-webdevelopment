import Contact from "../models/contactmodel.js";
import User from "../models/model.js";
import Menu from "../models/menuSchema.js"

// Create / Save Contact
export const userContact = async (req, res, next) => {
  try {
    console.log("STEP 1: Controller hit hua");
    const { fullName, lastName, email, mobileNumber, city } = req.body;

    console.log("STEP 2: Destructured values:", { fullName, lastName, email, mobileNumber, city });

    // Validation
    if (!fullName || !lastName || !email || !mobileNumber || !city) {
      console.log("STEP 3: Validation fail ho gaya");
      const error = new Error("All Fields Are Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("STEP 4: Validation pass ho gayi");

    // Check if email exists
    const existingData = await Contact.findOne({ email });
    console.log("STEP 5: existingData =", existingData);

    if (existingData) {
      console.log("STEP 6: Email already exists");
      const error = new Error("Email Already Exists");
      error.statusCode = 409;
      return next(error);
    }

    // Create new contact
    console.log("STEP 7: Naya data create karne ja rahe hain");
    const newData = await Contact.create({ fullName, lastName, email, mobileNumber, city });
    console.log("STEP 8: newData =", newData);

    res.status(201).json({ message: "Data Created Successfully" });
    console.log("STEP 9: Response bhej diya");

  } catch (error) {
    next(error); // Pass to global error handler
  }
};

// Fetch all restaurants
export const GetAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await User.find({ role: "manager" }).select("-password");

    res.status(200).json({
      message: "Restaurants fetched successfully",
      data: restaurants,
    });
  } catch (error) {
    next(error);
  }
};
export const GetRetaurantMenuData = async (req, res, next) => {
  try {
    const { id, page } = req.params;
    console.log(page);

    if (!id) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const restaurantMenuData = await Menu.find({
      resturantID: id,
    })
      
      .populate("resturantID");

    res
      .status(200)
      .json({ message: "Menu fetched Sucessfully", data: restaurantMenuData });
  } catch (error) {
    next(error);
  }
};