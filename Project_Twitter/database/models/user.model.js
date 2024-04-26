const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = schema({
  username: { type: String, required: true },
  local: {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
});

userSchema.statics.hashPassword = async function (password) {
  try {
    return await bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  } catch (e) {
    throw e;
  }
};

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
