const express = require("express");
const app = express();

const knexFile = require("../knexfile")["development"];
const knex = require("knex")(knexFile);

class ClothesTrendRouter {
  constructor(clothesTrendService) {
    this.clothesTrendService = clothesTrendService;
  }
  router() {
    let router = express.Router();
    router.get("/", this.get.bind(this));
    router.post("/:gender_id/:style_id/:type_id", this.post.bind(this));
    return router;
  }

  get(req, res) {
    console.log("I am routing");
    return this.clothesTrendService
      .list()
      .then(clothes => res.json(clothes))
      .catch(err => res.status(500).json(err));
  }

  post(req, res) {
    console.log('clothes routing gender');
    return this.clothesTrendService
      .list(req.params.gender_id, req.params.style_id, req.params.type_id)
      .then(clothes => res.json(clothes))
      .catch(err => res.status(500).json(err));
  }
}

module.exports = ClothesTrendRouter;
