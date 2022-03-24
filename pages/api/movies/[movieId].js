import { connectToDatabase } from "../../../util/mongodb";
const { ObjectId } = require("mongodb");
export default async (req, res) => {
  const { movieId } = await req.query;
  console.log(movieId);
  const { db } = await connectToDatabase();
  const movie = await db
    .collection("movies")
    .find({ _id: ObjectId(`${movieId}`) })
    .toArray();
  res.json(movie);
  console.log(movie);
};
