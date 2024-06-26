require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

const leagueRoutes = require("./routes/league-routes");
const teamRoutes = require("./routes/team-routes");
const playerRoutes = require("./routes/player-routes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/leagues", leagueRoutes);

app.use("/api/teams", teamRoutes);

app.use("/api/players", playerRoutes);

app.get("/", (_req,res)=> res.send("Hello World!"));

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));