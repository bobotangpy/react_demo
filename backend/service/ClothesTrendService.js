class ClothesTrendService {
  constructor(knex) {
    this.knex = knex;
  }

  list(gender_id ,style_id, type_id) {
    let query = this.knex
      .select("clothes_id", "name", "price", "img", "style_id", "type_id", "gender_id")
      .from("clothes")
      .where({
        gender_id: gender_id,
        style_id: style_id,
        type_id: type_id
      })
      .limit(12);
    console.log("Hey this is trend");
    return query.then(data => {
      return data;
    });
  }
}

module.exports = ClothesTrendService;
