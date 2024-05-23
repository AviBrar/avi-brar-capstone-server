/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex("leagues").del();
    await knex("leagues").insert([
        {
            "id": 1,
            "league_name": "Primera A",
            "league_teams": 3,
            "area": "California",
            "country": {"name": "United States", "code": "US", "logo": "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"},
            "league_administrator": "Steve Watkins",
            "contact_phone": "9919919988",
            "contact_email": "administrator@prim.com"
        },
        {
            "id": 2,
            "league_name": "Premier League",
            "league_teams": 2,
            "area": "Cascadia",
            "country": {"name": "Canada", "code": "CA", "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"},
            "league_administrator": "Alex Turns",
            "contact_phone": "6045736625",
            "contact_email": "administrator@prem.com"
        },
    ]);
  };
  