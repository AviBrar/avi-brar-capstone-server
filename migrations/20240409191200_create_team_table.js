/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex)  {
    return knex.schema.createTable("teams", (table) => {
      table.increments("id").primary();
      table
        .integer("league_id")
        .unsigned()
        .references("leagues.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("team_name").notNullable();
      table.string("city").notNullable();
      table.string("country").notNullable();
      table.string("manager_name").notNullable();
      table.string("team_description").notNullable();
      table.string("contact_phone").notNullable();
      table.string("contact_email").notNullable();
      table.integer("founding_year").notNullable();
      table.integer("goals").notNullable();
      table.integer("goals_against").notNullable();
      table.integer("wins").notNullable();
      table.integer("draws").notNullable();
      table.integer("losses").notNullable();
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
      return knex.schema.dropTable("teams");
  };
  