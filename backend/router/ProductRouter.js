const express = require("express");
// const app = express();

// const knexFile = require("../knexfile")["development"];
// const knex = require("knex")(knexFile);

class ProductRouter {
    constructor(productService) {
        this.productService = productService;
    };

    router() {
        let router = express.Router();
        router.get("/", this.get.bind(this));
        return router;
    };

    get(req, res) {
        console.log("getting productInfo", req.query);
        return this.productService.list(req.query.id, req.query.name)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
    };

};

module.exports = ProductRouter;