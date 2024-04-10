const knex = require("knex")(require("../knexfile"));

const getTeams = async (_req, res) => {
    try {
      const teams = await knex("teams")
        .select(
          "id",
          "league_id",
          "team_name",
          "city",
          "country",
          "manager_name",
          "team_description",
          "contact_phone",
          "contact_email",
          "founding_year",
          "goals",
          "goals_against",
          "wins",
          "draws",
          "losses",
        )
      res.json(teams);
    } catch (e) {
      res.status(500).json({
        message: `Unable to retrieve teams ${e}`,
      });
    }
  }

const findTeam = async (req, res) => {
  try {
    const teamfound = await knex("teams")
      .where({
        id: req.params.id,
      })
      .select(
        "id",
        "league_id",
        "team_name",
        "city",
        "country",
        "manager_name",
        "team_description",
        "contact_phone",
        "contact_email",
        "founding_year",
        "goals",
        "goals_against",
        "wins",
        "draws",
        "losses",
      )
    if (teamfound === 0) {
      return res.status(404).json({
        message: `team with ID ${req.params.id} not found`,
      });
    }
    const teamData = teamfound[0];
    res.json(teamData);
  } catch (err) {
    res.status(500).json({
      message: `Unable to retrieve team data for team with ID: ${req.params.id}.`,
    });
  }
};

const updateTeam = async (req, res) => {
  if (
    !req.body.team_name ||  
    !req.body.league_id ||
    !req.body.city ||
    !req.body.country ||
    !req.body.manager_name ||
    !req.body.team_description ||
    !req.body.contact_phone ||
    !req.body.contact_email ||
    !req.body.founding_year ||
    !req.body.goals ||
    !req.body.goals_against ||
    !req.body.wins ||
    !req.body.draws ||
    !req.body.losses
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
    const rowsUpdated = await knex("teams")
      .where({ id: req.params.id })
      .update(req.body);

    if (rowsUpdated === 0) {
      return res.status(404).json({
        message: `team with ID ${req.params.id} not found`,
      });
    }

    const updatedTeam = await knex("teams")
      .where({
        id: req.params.id,
      })
      .first()
      .select(
        "id",
        "league_id",
        "team_name",
        "city",
        "country",
        "manager_name",
        "team_description",
        "contact_phone",
        "contact_email",
        "founding_year",
        "goals",
        "goals_against",
        "wins",
        "draws",
        "losses",
      )

    res.json(updatedTeam);
  } catch (e) {
    res.status(500).json({
      message: e,
    });
  }
};

const addTeam = async (req, res) => {
    if (
        !req.body.team_name ||  
        !req.body.league_id ||
        !req.body.city ||
        !req.body.country ||
        !req.body.manager_name ||
        !req.body.team_description ||
        !req.body.contact_phone ||
        !req.body.contact_email ||
        !req.body.founding_year ||
        !req.body.goals ||
        !req.body.goals_against ||
        !req.body.wins ||
        !req.body.draws ||
        !req.body.losses
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
    const result = await knex("teams").insert(req.body);

    const newTeamId = result[0];
    const createdTeam = await knex("teams")
      .where({ id: newTeamId })
      .select(
        "id",
        "league_id",
        "team_name",
        "city",
        "country",
        "manager_name",
        "team_description",
        "contact_phone",
        "contact_email",
        "founding_year",
        "goals",
        "goals_against",
        "wins",
        "draws",
        "losses"
      );
    res.status(201).json(createdTeam);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create new team: ${error}`,
    });
  }
};

const getTeamPlayers = async (req, res) => {
  try {
    const findPlayers = await knex("players")
      .where({
        team_id: req.params.id,
      })
      .select(
        "id", 
        "team_id", 
        "player_name"
    );

    res.json(findPlayers);
  } catch (err) {
    res.status(404).json({
      message: `Team ID:${req.params.id} is not found `,
    });
    res.status(200).json({
      message: `Team ID:${req.params.id} found `,
    });
  }
};

const deleteTeam = async (req, res) => {
  
  try {
    const playerDelete = await knex("players")
      .where({ team_id: req.params.id })
      .delete();

    const teamDelete = await knex("teams")
      .where({ id: req.params.id })
      .delete();

    if (teamDelete === 0) {
      return res
        .status(404)
        .json({ message: `team with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);

  } catch (error) {
    res.status(500).json({
      message: `Unable to delete team: ${error}`,
    });
  }
};

module.exports = {
  getTeams,
  findTeam,
  updateTeam,
  addTeam,
  getTeamPlayers,
  deleteTeam
};
