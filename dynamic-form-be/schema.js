const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  about: String,
  gender: String,
  department: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
