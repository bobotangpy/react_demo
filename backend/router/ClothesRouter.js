const express = require("express");
class ClothesRouter {
  constructor(clothesService) {
    this.clothesService = clothesService;
  }
  router() {
    let router = express.Router();
    router.get("/:gender_id/:style_id/:type_id", this.get.bind(this));
    // router.post("/:gender_id/:style_id/:type_id", this.get.bind(this));
    return router;
  }

  get(req, res) {
    return this.clothesService
      .list(req.params.gender_id,req.params.style_id,req.params.type_id)
      .then(clothes =>{ 
        // console.log(clothes)
        res.json(clothes)})
      .catch(err => res.status(500).json(err));
  }

  // post(req, res) {
  //   console.log('clothes routing gender');
  //   return this.clothesService
  //     .list(req.params.gender_id,req.params.style_id,req.params.type_id)
  //     .then(clothes =>{ 
  //       // console.log(clothes)
  //       res.json(clothes)})
  //     .catch(err => res.status(500).json(err));
  // }
}

module.exports = ClothesRouter;
