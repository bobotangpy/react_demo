const express = require("express");
const app = express();

const knexFile = require("../knexfile")["development"];
const knex = require("knex")(knexFile);

class ClothesRouter {
  constructor(clothesService) {
    this.clothesService = clothesService;
  }
  router() {
    let router = express.Router();
    router.get("/:gender_id/:style_id/:type_id", this.get.bind(this));
    return router;
  }

  get(req, res) {
    console.log('calling clothesRouter')
    return this.clothesService
      .list(req.params.gender_id,req.params.style_id,req.params.type_id)
      .then(clothes =>{ 
        // console.log(clothes)
        res.json(clothes)})
      .catch(err => res.status(500).json(err));
  }
}

module.exports = ClothesRouter;
