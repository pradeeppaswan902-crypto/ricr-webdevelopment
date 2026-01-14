import Student from "../models/model.js";

export const registerStudent = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    await Student.create({
      fullName,
      email,
      phone,
      password,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("ERROR", error);
    res.status(500).json({ message: error.message });
  }
};
