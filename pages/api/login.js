import { connectToDatabase } from "../../util/mongodb";
import bcrypt from "bcrypt";

export default async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const { db } = await connectToDatabase();
  const users = await db
    .collection("users")
    .findOne({ email: email }, function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          bcrypt.compare(password, foundUser.password, function (err, result) {
            if (result === true) {
              res.status(201).send({ message: "User logged in" });
            } else {
              res.status(405).send({ message: "Password not correct" });
            }
          });
        }
      }
    });
};
