/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("teams").del();
    await knex("teams").insert([
        {
            "id": 1,
            "league_id": 1,
            "team_name": "Eagles",
            "city": "Newtown",
            "country": "USA",
            "manager_name": "John Henderson",
            "team_description": "A wonderful Team",
            "contact_phone": "8896754536",
            "contact_email": "soccer@football.com",
            "founding_year": 1950
        },
        {
            "id": 2,
            "league_id": 1,
            "team_name": "Sharks",
            "city": "Rivercity",
            "country": "USA",
            "manager_name": "John Henderson",
            "team_description": "A wonderful Team",
            "contact_phone": "8896754536",
            "contact_email": "soccer@football.com",
            "founding_year": 1963
        },
        {
            "id": 3,
            "league_id": 1,
            "team_name": "Dolphins",
            "city": "San Diego",
            "country": "USA",
            "manager_name": "John Henderson",
            "team_description": "A wonderful Team",
            "contact_phone": "8896754536",
            "contact_email": "soccer@football.com",
            "founding_year": 1969
        },
        {
            "id": 4,
            "league_id": 2,
            "team_name": "Hawks",
            "city": "Cloverdale",
            "country": "Canada",
            "manager_name": "John Henderson",
            "team_description": "A wonderful Team",
            "contact_phone": "8896754536",
            "contact_email": "soccer@football.com",
            "founding_year": 1924
        },
        {
            "id": 5,
            "league_id": 2,
            "team_name": "Totems",
            "city": "Aldergrove",
            "country": "Canada",
            "manager_name": "John Henderson",
            "team_description": "A wonderful Team",
            "contact_phone": "8896754536",
            "contact_email": "soccer@football.com",
            "founding_year": 1938
        },
    ]);
  };
  