/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: 1,
      name: "Jasluv Brar",
      username: "Exploits97",
      password: "Imagoofygoober",
    },
    {
      id: 2,
      name: "Avi Brar",
      username: "AwesomeAvi",
      password: "6617",
    },
  ]);
};
