const knex = require("knex")(require("../knexfile"));

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = await knex("user")
      .where({
        username: req.body.username,
        password: req.body.password,
      })
      .select("id", "username");
    if (user.length === 0) {
      return res.status(404).json({
        message: `User with username ${req.body.username} not found`,
      });
    }
    const userData = user[0];
    res.json(userData);
  } catch (err) {
    res.status(500).json({
      message: `Unable to retrieve user data for user with username: ${req.body.username}.`,
    });
  }
};

const token = async (req, res) => {
  try {
    const user = await knex("user")
      .where({
        username: req.body.username,
        password: req.body.password,
      })
      .select("name");
    if (user.length === 0) {
      return res.status(404).json({
        message: `User with username ${req.body.username} not found`,
      });
    }
    const userData = user[0];
    const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken });
  } catch (err) {
    res.status(500).json({
      message: `Unable to retrieve user data for user with username: ${req.body.username}.`,
    });
  }
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

const register = async (req, res) => {
  try {
    const user = await knex("user").insert({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: `Unable to register user with username: ${req.body.username}.`,
    });
  }
};

module.exports = {
  login,
  authenticateToken,
  token,
  register,
};
