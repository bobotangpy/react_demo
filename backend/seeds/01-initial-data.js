
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('userstable').del()
    .then(function () {
      // Inserts seed entries
      return knex('userstable').insert([
        { 
          name: 'tester2', 
          password: '$2b$10$.U/L4BiIcqmeWDhUvo638.jWLlzLLAm/KAksgUYe3CZcUpIPJaXTC',
          horoscope: 'Capricorn',
          email: 'tester2@gmail.com' 
        },
      ]);
    });
};
