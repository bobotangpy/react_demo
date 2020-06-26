const express = require("express");

class ProductTypeRouter {
  constructor(productTypeService) {
    this.productTypeService = productTypeService;
  }

  router() {
    let router = express.Router();
    router.get("/", this.get.bind(this));
    router.post("/:gender_id/:type_id/:style_id", this.post.bind(this));
    return router;
  }

  get(req, res) {
    return this.productTypeService
      .list()
      .then(clothes => res.json(clothes))
      .catch(err => res.status(500).json(err));
  }

  post(req, res) {
    console.log("connecting to productInfo");
    return this.productTypeService
      .list(req.params.gender_id, req.params.type_id, req.params.style_id)
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
  }
}

module.exports = ProductTypeRouter;
