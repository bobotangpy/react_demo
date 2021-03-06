const express = require('express');
const app = express();

const knexFile = require("../knexfile")["development"];
const knex = require("knex")(knexFile);

class CartRouter {
  constructor(cartService) {
    this.cartService = cartService
  }

  router() {
    let router = express.Router();
    router.get('/', this.get.bind(this));
    router.post('/', this.post.bind(this));
    router.put('/', this.put.bind(this));
    router.delete('/', this.delete.bind(this));
    return router;
  }

  get(req, res) {
    // console.log(req.query)
    return this.cartService
    .list(req.query.user_id)
    .then((cart) => 
    // console.log(cart))
    res.json(cart))
    .catch((err) => res.status(500).json(err));
  }

  post(req, res) {
    return this.cartService
    .add(req.body.clothes_id, req.body.quantity, req.body.size, req.body.user_id)
    .then((msg) => {
      console.log('msg', msg)
      res.json(msg)})
    .catch((err) => res.status(500).json(err));
  }

  put(req, res) {
    return this.cartService.update(req.body.clothes_id, req.body.quantity, req.body.size, req.body.user_id)
      .then((cart) => res.json(cart))
      .catch((err) => res.status(500).json(err));
  }

  delete(req, res) {
    return this.cartService
    .remove(req.query.user_id, req.query.clothes_id, req.query.size)
    .then((msg) => res.json(msg))
    .catch((err) => res.status(500).json(err));
  }

}

module.exports = CartRouter;