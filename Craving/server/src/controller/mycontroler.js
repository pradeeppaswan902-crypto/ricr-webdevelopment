import Contact from "../models/contactmodel.js";

export const userContact = async (req, res, next) => {
  console.log("STEP 1: Controller hit hua");

  console.log("STEP 2: req.body =", req.body);

  const { fullName, lastName, email, mobileNumber, city } = req.body;

  console.log("STEP 3: Destructured values:", {
    fullName,
    lastName,
    email,
    mobileNumber,
    city,
  });

  if (!fullName || !lastName || !email || !mobileNumber || !city) {
    console.log("STEP 4: Validation fail ho gaya");

    const error = new Error("All Fiels Are Required");
    error.errorCode = 400;
    return next(error);
  }

  console.log("STEP 5: Validation pass ho gayi");

  const existingData = await Contact.findOne({ email });

  console.log("STEP 6: existingData =", existingData);

  if (existingData) {
    console.log("STEP 7: Email already exist");

    const error = new Error("Email All Ready exist");
    error.error.StatusCode = 409;
    return next(error);
  }

  console.log("STEP 8: Naya data create karne ja rahe hain");

  const newData = await Contact.create({
    fullName,
    lastName,
    email,
    mobileNumber,
    city,
  });

  console.log("STEP 9: newData =", newData);

  res.status(201).json({ message: "Data Create SuccessFull" });

  console.log("STEP 10: Response bhej diya");
};
