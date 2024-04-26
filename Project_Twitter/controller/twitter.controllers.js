const { request, response } = require("express");
const Tweet = require("../database/models/tweet.model");
const { deleteTweetPerid } = require("../database/queries/tweet.queries");

const listerTweets = (request, response, next) => {
  Tweet.find({})
    .sort({ _id: -1 })
    .then((tweets) => response.render("tweets/tweet-list", { tweets }))
    .catch((err) => console.log(err));
};

const newTweet = (request, response, next) => {
  response.render("tweets/tweet-form");
};

const sauvegarderUnTweet = (request, response, next) => {
  const tweetBody = request.body;
  const newTweet = new Tweet(tweetBody);

  newTweet
    .save()
    .then((tweetEnregistre) => {
      response.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      response.end();
    });
};

const deleteunTweet = (request, response, next) => {
  const tweetId = request.params.id;
  Tweet.findByIdAndDelete(tweetId)
    .then(() => {
      console.log("Tweet supprimé");
      response.redirect("/");
    })
    .catch((err) => console.log(err));
};

//modificar tweet
const editTweet = (request, response, next) => {
  const tweetId = request.params.id;
  Tweet.findById(tweetId)
    .then((tweet) => {
      response.render("tweets/edit-tweet-form", { tweet });
    })
    .catch((err) => console.log(err));
};

//recuperer le tweet
const findTweet = (request, response, next) => {
  const tweetId = request.params.id;
  const tweetBody = request.body;
  console.log(tweetBody);
  Tweet.findByIdAndUpdate(tweetId, tweetBody)
    .then(() => {
      console.log("Tweet edité");
      response.redirect("/");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  listerTweets,
  newTweet,
  sauvegarderUnTweet,
  deleteunTweet,
  editTweet,
  findTweet,
};
