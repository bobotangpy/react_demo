
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("userstable", (table) => {
      table.increments("id").unsigned().primary();
      table.string("name");
      table.string("password");
      table.string("horoscope");
      table.string("email").unique();
    })
    .createTable("horoscope", (table) => {
      table.increments("id").unsigned().primary();
      table.string("horoscope");
    })
    .createTable("clothes", (table) => {
      table.increments("clothes_id").unsigned().primary();
      table.integer("name");
      table.integer("style_id");
      table.integer("type_id");
      table.integer("gender_id");
      table.string("price");
      table.string("img");
      table.string("horoscope_id");
    })
    .createTable("cart", (table) => {
      table.increments("cart_id").unsigned().primary();
      table.integer("userstable_id");
      table.integer("clothes_id");
      table.string("price");
      table.integer("quantity");
      table.string("size");
    })
    .createTable("orderhistory", (table) => {
      table.increments("orderhistory_id").unsigned().primary();
      table.integer("userstable_id");
      table.integer("clothes_id");
      table.string("price");
      table.integer("quantity");
      table.string("size");
      table.string("total");
      table.timestamp("order_date");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("userstable")
    .dropTable("horoscope")
    .dropTable("clothes")
    .dropTable("cart")
    .dropTable("orderhistory")
};
