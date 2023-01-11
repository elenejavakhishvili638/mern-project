const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: mongoose.Types.ObjectId, required: true, ref: "Place" },
  places: [{ type: String, required: true }],
  //unique make it possible to excess to email by giving unique codes and getting them, and package unique validator check if email already exists
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  image: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
