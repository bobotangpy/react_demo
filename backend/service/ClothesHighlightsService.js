class ClothesHighlightsService {
  constructor(knex) {
    this.knex = knex;
  }

 async list(horoscope, style_id) {
      let query =  await this.knex
        .select("name", "clothes_id", "price", "img", "gender_id", "horoscope_id")
        .from("clothes")
        .where({
          horoscope_id: horoscope,
          style_id: style_id
        })
        .orderBy("gender_id", "asc");
        return query
  }
}
module.exports = ClothesHighlightsService;
