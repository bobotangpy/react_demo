const clothes_data = require('../clothes_data.json');

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothes').del()
    .then(function () {
      // Inserts seed entries
      await knex('clothes').insert(clothes_data.clothes);
    });
};
