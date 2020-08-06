
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('horoscope').del()
    .then(function () {
      // Inserts seed entries
      return knex('horoscope').insert([
        {
          id : 1,
          horoscope : "Aries"
        },
        {
          id : 2,
          horoscope : "Taurus"
        },
        {
          id : 3,
          horoscope : "Gemini"
        },
        {
          id : 4,
          horoscope : "Cancer"
        },
        {
          id : 5,
          horoscope : "Leo"
        },
        {
          id : 6,
          horoscope : "Virgo"
        },
        {
          id : 7,
          horoscope : "Libra"
        },
        {
          id : 8,
          horoscope : "Scorpio"
        },
        {
          id : 9,
          horoscope : "Sagittarius"
        },
        {
          id : 10,
          horoscope : "Capricorn"
        },
        {
          id : 11,
          horoscope : "Aquarius"
        },
        {
          id : 12,
          horoscope : "Pisces"
        }
      ]);
    });
};
