const router = require("express").Router();

const {
  listerTweets,
  newTweet,
  sauvegarderUnTweet,
  deleteunTweet,
  editTweet,
  findTweet,
} = require("../controller/twitter.controllers");

const Tweet = require("../database/models/tweet.model");

router.get("/", listerTweets);
router.get("/new", newTweet);
router.post("/create", sauvegarderUnTweet);
router.get("/delete/:id", deleteunTweet);
router.get("/edit/:id", editTweet);
router.post("/edit/:id", findTweet);

module.exports = router;
