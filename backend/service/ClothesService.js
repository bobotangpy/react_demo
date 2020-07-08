class ClothesService {
  constructor(knex) {
    this.knex = knex;
  }

  async list(gender_id, style_id, type_id) {
    let query = await this.knex
      .select("name", "clothes_id", "price", "img", "gender_id", "horoscope_id")
      .from("clothes")
      .where({
        gender_id: gender_id,
        style_id: style_id,
        type_id: type_id
      })
      .limit(12);
    // console.log(query);
    return query
  }
}
module.exports = ClothesService;
