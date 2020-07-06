const express = require("express");
const app = express();

const knexFile = require("../knexfile")["development"];
const knex = require("knex")(knexFile);

class ClothesHighlightsRouter {
  constructor(clothesHighlightsService) {
    this.clothesHighlightsService = clothesHighlightsService;
  }
  router() {
    let router = express.Router();
    router.get("/:horoscope/:style_id", this.get.bind(this));
    return router;
  }

  get(req, res) {
    return this.clothesHighlightsService
      .list(req.params.horoscope, req.params.style_id)
      .then(clothes =>{ 
        // console.log(clothes)
        res.json(clothes)})
      .catch(err => res.status(500).json(err));
  }
}

module.exports = ClothesHighlightsRouter;