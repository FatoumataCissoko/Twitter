const User = require("../models/user.model");

const createUser = async (user) => {
  try {
    console.log("LeUser", user);
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      local: {
        email: user.email,
        password: hashedPassword,
      },
    });
    return newUser.save();
  } catch (e) {
    throw e;
  }
};

const findUserPerEmail = (email) => {
  return User.findOne({ "local.email": email }).exec();
};

const findUserPerId = (id) => {
  return User.findById(id).exec();
};

module.exports = {
  createUser,
  findUserPerEmail,
  findUserPerId,
};
