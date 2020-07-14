class ProductService {
  constructor(knex) {
    this.knex = knex;
  }

  list(id, name) {
    let query = this.knex
      .select()
      .from("clothes")
      .where("clothes_id", id);
      // console.log(query)
    return query.then(data => {
      console.log(data);
      return data.map(row => ({
        id: row.clothes_id,
        name: row.name,
        img: row.img,
        price: row.price, 
        gender: row.gender_id,
        type: row.type_id,
        style: row.style_id
      }));
    });
  }
}

module.exports = ProductService;
