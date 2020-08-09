const clothes_data = require('../clothes_data.json');

// const inserts = function() {
//   let data = clothes_data.clothes;
//   let insertPromises = [];
//   data.forEach(function(item) {
//      insertPromises.push(
//         knex('clothes')
//            .insert({data: JSON.stringify(item) })
//      );
//   });
//   return Promise.all(insertPromises);
// };


exports.seed = function (knex, Promise) {
  let data = clothes_data;
  // Deletes ALL existing entries
  return knex('clothes').del()
    .then(() => {
      return data.forEach(function (item) {
        knex('clothes')
          .insert({ data: JSON.stringify(item) })
      });
    })
    .catch(err => {
      console.log(err)
    })
};
