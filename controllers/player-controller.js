const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
  try {
    const data = await knex("players")
      .join("teams", "players.team_id", "teams.id")
      .select(
        "players.id",
        "teams.team_name",
        "players.player_name"
      );
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(`Error retrieving Inventories: ${error}`);
  }
};

const findPlayer = async (req, res) => {
  try {
    const teamPlayer = await knex("players")
    .join("teams", "players.team_id", "teams.id")
    .select(
      "players.id",
      "teams.team_name",
      "players.player_name",
      "players.address",
      "players.city",
      "players.country",
      "players.contact_name",
      "players.contact_phone",
      "players.player_phone",
      "players.player_email",
      "players.goals",
      "players.assists",
      "players.yellow_cards",
      "players.red_cards"
    )
      .where("players.id", req.params.id);

    res.json(teamPlayer[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve player data for player with ID ${req.params.id}`,
    });
  }
};

const addPlayer = async (req, res) => {
    if (
        !req.body.team_id ||
        !req.body.player_name ||
        !req.body.address ||
        !req.body.city ||
        !req.body.country ||
        !req.body.contact_name ||
        !req.body.contact_phone ||
        !req.body.player_phone ||
        !req.body.player_email
    ) {
    res.status(500).send({ message: "All fields must be inputted" });
    return;
  } else if (
    !req.body.player_email.includes("@") ||
    !req.body.player_email.includes(".com")
  ) {
    res.status(500).send({ message: "Invalid Email Address" });
    return;
  } else if (req.body.contact_phone.length !== 17 || req.body.player_phone.length !== 17) {
    res.status(500).send({
      message:
        "Invalid Phone Number Format, Must Use Format: +1 (XXX) XXX-XXXX",
    });
    return;
  }

  try {
    const result = await knex("players").insert(req.body);

    const newPlayerId = result[0];
    const createdPlayer = await knex("players")
      .where({ id: newPlayerId })
      .select(
        "id",
        "team_id",
        "player_name",
        "address",
        "city",
        "country",
        "contact_name",
        "contact_phone",
        "player_phone",
        "player_email"
      );
    res.status(201).json(createdPlayer);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new player: ${error}`,
    });
  }
};

// {
//     "id": 2,
//     "team_id": 1,
//     "player_name": "Player 2",
//     "address": "112 california drive",
//     "city": "San Francisco",
//     "country": "USA",
//     "contact_name": "Mary Freidman",
//     "contact_phone": "9919919988",
//     "player_phone": "5564453424",
//     "player_email": "player2@prim.com"
// },

const updatePlayer = async (req, res) => {
    if (
        !req.body.team_id ||
        !req.body.player_name ||
        !req.body.address ||
        !req.body.city ||
        !req.body.country ||
        !req.body.contact_name ||
        !req.body.contact_phone ||
        !req.body.player_phone ||
        !req.body.player_email
    ) {
      res.status(500).send({ message: "All fields must be inputted" });
      return;
    } else if (
      !req.body.player_email.includes("@") ||
      !req.body.player_email.includes(".com")
    ) {
      res.status(500).send({ message: "Invalid Email Address" });
      return;
    } else if (req.body.contact_phone.length !== 17 || req.body.player_phone.length !== 17) {
        res.status(500).send({
        message:
          "Invalid Phone Number Format, Must Use Format: +1 (XXX) XXX-XXXX",
      });
      return;
    }
  
    try {
      const rowsUpdated = await knex("players")
        .where({ id: req.params.id })
        .update(req.body);
  
      if (rowsUpdated === 0) {
        return res.status(404).json({
          message: `Player with ID ${req.params.id} not found`,
        });
      }
  
      const updatedPlayer = await knex("players")
        .where({
          id: req.params.id,
        })
        .first()
        .select(
            "id",
            "team_id",
            "player_name",
            "address",
            "city",
            "country",
            "contact_name",
            "contact_phone",
            "player_phone",
            "player_email"
          );
      res.json(updatedPlayer);
    } catch (e) {
      res.status(500).json({
        message: e,
      });
    }
  };

const deletePlayer = async (req, res) => {
  try {
    const rowsDelete = await knex("players")
      .where({ id: req.params.id })
      .delete();
    if (rowsDelete === 0) {
      return res
        .status(404)
        .json({ message: `Player with ID: ${req.params.id} not found` });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete player: ${error}`,
    });
  }
};

module.exports = {
  index,
  findPlayer,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
