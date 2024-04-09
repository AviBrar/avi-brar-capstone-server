/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("players").del();
    await knex("players").insert([
        {
            "id": 1,
            "team_id": 1,
            "player_name": "Player 1",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player1@prim.com"
        },
        {
            "id": 2,
            "team_id": 1,
            "player_name": "Player 2",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player2@prim.com"
        },
        {
            "id": 3,
            "team_id": 1,
            "player_name": "Player 3",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player3@prim.com"
        },
        {
            "id": 4,
            "team_id": 1,
            "player_name": "Player 4",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player4@prim.com"
        },
        {
            "id": 5,
            "team_id": 1,
            "player_name": "Player 5",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player5@prim.com"
        },
        {
            "id": 6,
            "team_id": 1,
            "player_name": "Player 6",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player6@prim.com"
        },
        {
            "id": 7,
            "team_id": 1,
            "player_name": "Player 7",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player7@prim.com"
        },
        {
            "id": 8,
            "team_id": 1,
            "player_name": "Player 8",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player8@prim.com"
        },
        {
            "id": 9,
            "team_id": 1,
            "player_name": "Player 9",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player9@prim.com"
        },
        {
            "id": 10,
            "team_id": 1,
            "player_name": "Player 10",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player10@prim.com"
        },
        {
            "id": 11,
            "team_id": 1,
            "player_name": "Player 11",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player11@prim.com"
        },
        {
            "id": 12,
            "team_id": 2,
            "player_name": "Player 12",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player12@prim.com"
        },
        {
            "id": 13,
            "team_id": 2,
            "player_name": "Player 13",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player13@prim.com"
        },
        {
            "id": 14,
            "team_id": 2,
            "player_name": "Player 14",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player14@prim.com"
        },
        {
            "id": 15,
            "team_id": 2,
            "player_name": "Player 15",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player15@prim.com"
        },
        {
            "id": 16,
            "team_id": 2,
            "player_name": "Player 16",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player16@prim.com"
        },
        {
            "id": 17,
            "team_id": 2,
            "player_name": "Player 17",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player17@prim.com"
        },
        {
            "id": 18,
            "team_id": 2,
            "player_name": "Player 18",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player18@prim.com"
        },
        {
            "id": 19,
            "team_id": 2,
            "player_name": "Player 19",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player19@prim.com"
        },
        {
            "id": 20,
            "team_id": 2,
            "player_name": "Player 20",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player20@prim.com"
        },
        {
            "id": 21,
            "team_id": 2,
            "player_name": "Player 21",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player21@prim.com"
        },
        {
            "id": 22,
            "team_id": 2,
            "player_name": "Player 22",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player22@prim.com"
        },
        {
            "id": 23,
            "team_id": 3,
            "player_name": "Player 23",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player23@prim.com"
        },
        {
            "id": 24,
            "team_id": 3,
            "player_name": "Player 24",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player24@prim.com"
        },
        {
            "id": 25,
            "team_id": 3,
            "player_name": "Player 25",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player25@prim.com"
        },
        {
            "id": 26,
            "team_id": 3,
            "player_name": "Player 26",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player26@prim.com"
        },
        {
            "id": 27,
            "team_id": 3,
            "player_name": "Player 27",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player27@prim.com"
        },
        {
            "id": 28,
            "team_id": 3,
            "player_name": "Player 28",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player28@prim.com"
        },
        {
            "id": 29,
            "team_id": 3,
            "player_name": "Player 29",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player29@prim.com"
        },
        {
            "id": 30,
            "team_id": 3,
            "player_name": "Player 30",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player30@prim.com"
        },
        {
            "id": 31,
            "team_id": 3,
            "player_name": "Player 31",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player31@prim.com"
        },
        {
            "id": 32,
            "team_id": 3,
            "player_name": "Player 32",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player32@prim.com"
        },
        {
            "id": 33,
            "team_id": 3,
            "player_name": "Player 33",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player33@prim.com"
        },
        {
            "id": 34,
            "team_id": 4,
            "player_name": "Player 34",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player34@prim.com"
        },
        {
            "id": 35,
            "team_id": 4,
            "player_name": "Player 35",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player35@prim.com"
        },
        {
            "id": 36,
            "team_id": 4,
            "player_name": "Player 36",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player36@prim.com"
        },
        {
            "id": 37,
            "team_id": 4,
            "player_name": "Player 37",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player37@prim.com"
        },
        {
            "id": 38,
            "team_id": 4,
            "player_name": "Player 38",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player38@prim.com"
        },
        {
            "id": 39,
            "team_id": 4,
            "player_name": "Player 39",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player39@prim.com"
        },
        {
            "id": 40,
            "team_id": 4,
            "player_name": "Player 40",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player40@prim.com"
        },
        {
            "id": 41,
            "team_id": 4,
            "player_name": "Player 41",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player41@prim.com"
        },
        {
            "id": 42,
            "team_id": 4,
            "player_name": "Player 42",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player42@prim.com"
        },
        {
            "id": 43,
            "team_id": 4,
            "player_name": "Player 43",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player43@prim.com"
        },
        {
            "id": 44,
            "team_id": 4,
            "player_name": "Player 44",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player44@prim.com"
        },
        {
            "id": 45,
            "team_id": 5,
            "player_name": "Player 45",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player45@prim.com"
        },
        {
            "id": 46,
            "team_id": 5,
            "player_name": "Player 46",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player46@prim.com"
        },
        {
            "id": 47,
            "team_id": 5,
            "player_name": "Player 47",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player47@prim.com"
        },
        {
            "id": 48,
            "team_id": 5,
            "player_name": "Player 48",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player48@prim.com"
        },
        {
            "id": 49,
            "team_id": 5,
            "player_name": "Player 49",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player49@prim.com"
        },
        {
            "id": 50,
            "team_id": 5,
            "player_name": "Player 50",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player50@prim.com"
        },
        {
            "id": 51,
            "team_id": 5,
            "player_name": "Player 51",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player51@prim.com"
        },
        {
            "id": 52,
            "team_id": 5,
            "player_name": "Player 52",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player52@prim.com"
        },
        {
            "id": 53,
            "team_id": 5,
            "player_name": "Player 53",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player53@prim.com"
        },
        {
            "id": 54,
            "team_id": 5,
            "player_name": "Player 54",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player54@prim.com"
        },
        {
            "id": 55,
            "team_id": 5,
            "player_name": "Player 55",
            "address": "112 california drive",
            "city": "San Francisco",
            "country": "USA",
            "contact_name": "Mary Freidman",
            "contact_phone": "9919919988",
            "player_phone": "5564453424",
            "player_email": "player55@prim.com"
        }
    ]);
  };
  