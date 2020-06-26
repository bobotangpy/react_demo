class ProductTypeService {
  constructor(knex) {
    this.knex = knex;
  }

  list(gender_id, style_id, type_id) {
    let query = this.knex
      .select("clothes_id", "name", "price", "img", "style_id", "type_id", "gender_id")
      .from("clothes")
      .where({
        gender_id: gender_id,
        style_id: style_id,
        type_id: type_id
      });
    // console.log(query);
    return query.then(data => {
      // console.log(data);
      return data;
    });
  }
}

module.exports = ProductTypeService;
