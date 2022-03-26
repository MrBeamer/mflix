import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
    unique: true,
    index: true,
    dropDups: true,
  },
  password: {
    required: true,
    type: String,
  },
  watchlist: {
    type: Array,
  },
});

export default mongoose.models.User || new mongoose.model("User", UserSchema);
