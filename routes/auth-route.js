const router = require("express").Router();
const authController = require("../controllers/auth-controller");

// router.use(authController.authenticateToken);

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);
router.route("/token").post(authController.token);

module.exports = router;
