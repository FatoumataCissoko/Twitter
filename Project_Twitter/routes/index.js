const router = require("express").Router();
const tweets = require("./tweets.routes");
const userRouter = require("./users.routes");

router.use("/tweets", tweets);
router.use("/users", userRouter);

router.get("/", (request, response) => {
  response.redirect("/tweets");
});

router.get("/", (request, response) => {
  response.redirect("/users");
});

module.exports = router;
