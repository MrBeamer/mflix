import { connectToDatabase } from "../../util/mongodb";
import User from "../../models/user";
import bcrypt from "bcrypt";

export default async (req, res) => {
  const saltRounds = 10;
  // Store hash in  password DB.
  bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
    const newUser = new User({ email: req.body.email, password: hash });
    //   Guard clause checks for first and last name,
    //    and returns early if they are not found
    if (!newUser.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ newUser: "Email not found" });
    } else if (!newUser.password) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ newUser: "Password not found" });
    }

    console.log("body: ", newUser);
    const { db } = await connectToDatabase();
    const users = await db.collection("users").insert(newUser);
    //   res.json(newUser);
    res.status(201).send({ message: "User registered" });
  });
};
