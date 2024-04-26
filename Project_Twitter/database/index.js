const mongoose = require("mongoose");

// protocole://username:password@hostname:PORT/Collection?OPTIONS
mongoose
  .connect(
    "mongodb://user:pwd@127.0.0.1:27017/Twitter?readPreference=primary&ssl=false&directConnection=true"
  )
  .then(() => console.log("Connexion OK!!"))
  .catch((err) => console.log(err));
