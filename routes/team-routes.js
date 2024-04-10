const router = require("express").Router();
const teamController = require("../controllers/team-controller");

router
  .route("/")
  .get(teamController.getTeams)
  .post(teamController.addTeam)
  
  router
  .route("/:id")
  .get(teamController.findTeam)
  .put(teamController.updateTeam)
  .delete(teamController.deleteTeam)
  
router
  .route("/:id/players")
  .get(teamController.getTeamPlayers)
module.exports = router;
