const express = require("express");
const app = express();

const knexFile = require("../knexfile")["development"];
const knex = require("knex")(knexFile);

class SuggestionRouter {
    constructor(suggestionService) {
        this.suggestionService = suggestionService;
    };

    router() {
        let router = express.Router();
        router.post("/:horoscope/:gender_id/:type_id", this.post.bind(this));
        return router;
    };
    
    post(req, res) {
        console.log("Posting suggestions");
        return this.suggestionService.listSuggest(req.params.horoscope, req.params.gender_id, req.params.type_id)
            .then(data => res.json(data))
            .catch(err => res.status(500).json(err));
    };
};

module.exports = SuggestionRouter;