/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("leagues", (table) => {
    table.increments("id").primary();
    table.string("league_name").notNullable();
    table.string("league_teams").notNullable();
    table.string("area").notNullable();
    table.json("country").notNullable();
    table.string("league_administrator").notNullable();
    table.string("contact_phone").notNullable();
    table.string("contact_email").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("leagues");
};
