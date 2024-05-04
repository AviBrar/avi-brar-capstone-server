const router = require("express").Router();
const loginController = require("../controllers/login-controller");

// router.use(loginController.authenticateToken);

router.route("/").post(loginController.login);
router.route("/token").post(loginController.token);

module.exports = router;
