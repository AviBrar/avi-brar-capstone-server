const router = require("express").Router();
const playerController = require("../controllers/player-controller");

router.route("/")
    .get(playerController.index)
    .post(playerController.addPlayer);
router
  .route("/:id")
  .get(playerController.findPlayer)
  .put(playerController.updatePlayer)
  .delete(playerController.deletePlayer)
module.exports = router;
