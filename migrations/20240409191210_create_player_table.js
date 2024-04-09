/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("players", (table) => {
      table.increments("id").primary();
      table
        .integer("team_id")
        .unsigned()
        .references("teams.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("player_name").notNullable();
      table.string("address").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table.string("contact_name").notNullable();
      table.string("contact_phone").notNullable();
      table.string("player_phone").notNullable();
      table.string("player_email").notNullable();
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
exports.down = function(knex) {
  
};
