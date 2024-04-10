const router = require("express").Router();
const leagueController = require("../controllers/league-controller");

router
  .route("/")
  .get(leagueController.getLeagues)
  .post(leagueController.addLeague)
  
  router
  .route("/:id")
  .get(leagueController.findLeague)
  .put(leagueController.updateLeague)
  .delete(leagueController.deleteLeague)
  
router
  .route("/:id/teams")
  .get(leagueController.getTeamsLeague)
module.exports = router;
