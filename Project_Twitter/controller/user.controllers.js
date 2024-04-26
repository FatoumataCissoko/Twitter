const User = require("../database/models/user.model");
const Twitter = require("../database/models/tweet.model");

const {
  createUser,
  findUserPerEmail,
  findUserPerId,
} = require("../database/queries/user.queries");

const afficherInscription = (request, response, next) => {
  response.render("users/inscription");
  response.end();
};

const afficherConnexion = (request, response, next) => {
  response.render("users/authentification");
  response.end();
};

const nouvelleInscription = async (request, response, next) => {
  const body = request.body;
  try {
    const user = await createUser(body);
    response.redirect("/users/connexion");
  } catch (e) {
    response.render("users/inscription", {
      errors: [e.message],
    });
  }
};

const verifierConnexion = async (request, response, next) => {
  const body = request.body;
  try {
    const user = await findUserPerEmail(body.email);
    if (user) {
      const match = await user.comparePassword(body.password);
      if (match) {
        response.render("tweets/tweet-list", { user });
      } else {
        response.render("users/authentification", {
          errors: ["Mot de passe incorrect !"],
        });
      }
    } else {
      response.render("users/authentification", {
        errors: ["L'utilisateur n'existe pas !"],
      });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  afficherInscription,
  afficherConnexion,
  nouvelleInscription,
  verifierConnexion,
};
