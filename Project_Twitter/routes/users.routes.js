const router = require("express").Router();

const {
  afficherInscription,
  afficherConnexion,
  nouvelleInscription,
  verifierConnexion,
} = require("../controller/user.controllers");

router.get("/connexion", afficherConnexion);
router.post("/connexion", verifierConnexion);
router.get("/inscription", afficherInscription);
router.post("/inscription", nouvelleInscription);

module.exports = router;
