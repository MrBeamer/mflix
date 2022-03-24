import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  movies: {
    type: Array,
  },
});

export default mongoose.models.User || new mongoose.model("User", UserSchema);
