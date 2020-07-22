class CartService {
  constructor(knex) {
    this.knex = knex;
  }

  /* The list() method is fired when the user goes to /cart.
  It basically takes in the current userId and uses it to query for all the clothes in the cart table */
  list(userId) {

    let query = this.knex
      .select('clothes.clothes_id', 'clothes.price', 'quantity', 'img', 'name', 'size')
      .from('cart')
      .join('clothes', {
        'clothes.clothes_id': 'cart.clothes_id'
      })
      .where({
        'userstable_id': userId
      })
      .orderBy('clothes.clothes_id', 'asc');

    return query.then(rows => {
      let priceTotal;
      let quantityTotal;
      let priceArray;
      let quantityArray;
      let reducer = (acc, cV) => acc + cV;
      //Converting and parsing the prices from string to numbers
      priceArray = rows.map(x => Number(x.price.split('$').pop()) * x.quantity);
      //Calculate total price of the cart
      priceTotal = priceArray.reduce(reducer, 0).toFixed(2);

      quantityArray = rows.map(x => x.quantity);
      quantityTotal = quantityArray.reduce(reducer, 0);

      return rows.map(row => ({
        name: row.name,
        img: row.img,
        id: row.clothes_id,
        quantity: row.quantity,
        totalQuantity: quantityTotal,
        price: row.price.split('$').pop(),
        totalPrice: priceTotal,
        size: row.size
      }));
    });
  };

  /* The add() method takes in:
  1) the id of whichever product that is being clicked on the /secret page
  2) the currently logged-in user's userId and adds items to the cart table */
  async add(clothes_id, quantity, size, userId) {
    //Query price of the clicked item using id
    let price;
    let res = {
      repeat: 0,
      msg: '',
      status: ''
    }

    await this.knex.select('price')
              .from('clothes')
              .where('clothes_id', clothes_id)
              .then((rows) => {
                price = rows[0].price;
              })

    return this.knex.select('clothes_id')
                    .from('cart')
                    .where('clothes_id', clothes_id)
                    .then((rows) => {
                    if (rows.length < 1) {
                        return this.knex.insert({
                          clothes_id: clothes_id,
                          quantity: quantity,
                          size: size,
                          userstable_id: userId,
                          price: price
                      }).into('cart').then(() => {
                          res.msg = 'Successfully added to your cart!'
                          res.status = 'success'
                          return res
                      });
                    // Do not allow repeated items
                    } else {
                      res.repeat = 1
                      res.msg = 'No repeated item!'
                      res.status = 'fail'
                      return res
                    }
                  });
  };

  /* The user is able to update the quantities of the products in their cart  */
  update(clothes_id, quantity, size, userId) {

    let query = this.knex.select('clothes_id')
                          .from('cart')
                          .where({
                            clothes_id: clothes_id,
                            userstable_id: userId,
                          })

    return query.then((rows => {
      if (rows.length === 1) {
        return this.knex('cart')
                    // .where('clothes_id', clothes_id)
                    .where({
                      clothes_id: clothes_id,
                      userstable_id: userId,
                    })
                    .update({
                      quantity: quantity,
                      size: size
                    });
      } else {
        throw new Error(`Cannot update quantity!`)
      }
    }));
  };

  /* The user is able to remove any undesired items by clicking on their remove buttons on the cart page  */
  remove(clothes_id, userId) {
    return this.knex('cart')
      .where({
        'clothes_id': clothes_id,
        'userstable_id': userId
      })
      .del()
      // .then(()=>{
      //   return "removed"
      // })
  };
};

module.exports = CartService;