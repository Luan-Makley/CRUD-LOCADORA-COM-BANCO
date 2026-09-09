/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
     table.increments("id").primary()
        
        table.integer("filme_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("filmes")
        .onDelete("CASCATE")

        table.integer("diretor_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("generos")
        .onDelete("CASCATE")
        
        table.timestamp(true,true)
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
