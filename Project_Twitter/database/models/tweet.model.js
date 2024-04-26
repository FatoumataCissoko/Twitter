const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  contenu: { type: String, maxlength: 145, minlength: 1, required: true },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
