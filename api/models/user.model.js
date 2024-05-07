import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "https://via.placeholder.com/150", // Placeholder image URL
  }
}, {
  timestamps: true
});

// Create a User model
const User = mongoose.model("User", userSchema);

export default User;
