const knex = require("knex")(require("../knexfile"));

const getLeagues = async (req, res) => {
    try {
      const leagues = await knex("leagues")
        .select(
          "id",
          "league_name",
          "league_teams",
          "area",
          "country",
          "league_administrator",
          "contact_phone",
          "contact_email"
        );
      res.json(leagues);
    } catch (e) {
      res.status(500).json({
        message: `Unable to retrieve league data. ${e}`,
      });
    }
}

const findLeague = async (req, res) => {
  try {
    const leaguefound = await knex("leagues")
      .where({
        id: req.params.id,
      })
      .select(
        "id",
        "league_name",
        "league_teams",
        "area",
        "country",
        "league_administrator",
        "contact_phone",
        "contact_email"
      );
    if (leaguefound === 0) {
      return res.status(404).json({
        message: `League with ID ${req.params.id} not found`,
      });
    }
    const leagueData = leaguefound[0];
    res.json(leagueData);
  } catch (err) {
    res.status(500).json({
      message: `Unable to retrieve league data for league with ID: ${req.params.id}.`,
    });
  }
};

const updateLeague = async (req, res) => {
  if (
    !req.body.league_name ||
    !req.body.league_teams ||
    !req.body.area ||
    !req.body.country ||
    !req.body.league_administrator ||
    !req.body.contact_phone ||
    !req.body.contact_email
  ) {
    res.status(500).send({ message: "All fields must be inputted" });
    return;
  } else if (
    !req.body.contact_email.includes("@") ||
    !req.body.contact_email.includes(".com")
  ) {
    res.status(500).send({ message: "Invalid Email Address" });
    return;
  } else if (req.body.contact_phone.length !== 17) {
    res.status(500).send({
      message:
        "Invalid Phone Number Format, Must Use Format: +1 (XXX) XXX-XXXX",
    });
    return;
  }

  try {
    const rowsUpdated = await knex("leagues")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `Leagues with ID ${req.params.id} not found`,
      });
    }

    const updatedLeague = await knex("leagues")
      .where({
        id: req.params.id,
      })
      .first()
      .select(
        "id",
        "league_name",
        "league_teams",
        "area",
        "country",
        "league_administrator",
        "contact_phone",
        "contact_email"
      );

    res.json(updatedLeague);
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

const addLeague = async (req, res) => {
  if (
    !req.body.league_name ||
    !req.body.league_teams ||
    !req.body.area ||
    !req.body.country ||
    !req.body.league_administrator ||
    !req.body.contact_phone ||
    !req.body.contact_email
  ) {
    res.status(500).send({ message: "All fields must be inputted" });
    return;
  } else if (
    !req.body.contact_email.includes("@") ||
    !req.body.contact_email.includes(".com")
  ) {
    res.status(500).send({ message: "Invalid Email Address" });
    return;
  } else if (req.body.contact_phone.length !== 17) {
    res.status(500).send({
      message:
        "Invalid Phone Number Format, Must Use Format: +1 (XXX) XXX-XXXX",
    });
    return;
  }

  try {
    const result = await knex("leagues").insert(req.body);

    const newLeagueId = result[0];
    const createdLeague = await knex("leagues")
      .where({ id: newLeagueId })
      .select(
        "id",
        "league_name",
        "league_teams",
        "area",
        "country",
        "league_administrator",
        "contact_phone",
        "contact_email"
      );
    res.status(201).json(createdLeague);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new League: ${error}`,
    });
  }
};

const getTeamsLeague = async (req, res) => {
  try {
    const findLeague = await knex("teams")
      .where({
        league_id: req.params.id,
      })
      .select(
        "id", 
        "team_name", 
        "goals", 
        "goals_against", 
        "wins",
        "draws",
        "losses"
    );

    res.json(findLeague);
  } catch (err) {
    res.status(404).json({
      message: `League ID:${req.params.id} is not found `,
    });
    res.status(200).json({
      message: `League ID:${req.params.id} found `,
    });
  }
};

const deleteLeague = async (req, res) => {
  
  try {
    const teamDelete = await knex("teams")
      .where({ league_id: req.params.id })
      .delete();

    const leagueDelete = await knex("leagues")
      .where({ id: req.params.id })
      .delete();

    if (leagueDelete === 0) {
      return res
        .status(404)
        .json({ message: `League with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);

  } catch (error) {
    res.status(500).json({
      message: `Unable to delete league: ${error}`,
    });
  }
};

module.exports = {
  getLeagues,
  updateLeague,
  addLeague,
  getTeamsLeague,
  findLeague,
  deleteLeague
};
