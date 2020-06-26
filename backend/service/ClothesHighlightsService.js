class ClothesHighlightsService {
  constructor(knex) {
    this.knex = knex;
  }

 async list(horoscope, gender_id) {
      let query =  await this.knex
        .select("name", "clothes_id", "price", "img", "gender_id", "horoscope_id")
        .from("clothes")
        .where({
          horoscope_id: horoscope,
          gender_id: gender_id
        });
        console.log("highlisght service")
        return query
  }
}
module.exports = ClothesHighlightsService;
