const { default: mongoose } = require("mongoose");
const Tweet = require("../models/tweet.model");

const deleteTweetPerid = async (req, res) => {
  await Tweet.findByIdAndDelete(req.params.id);
  res.redirect("/tweets");
};

module.exports = {
  deleteTweetPerid,
};
