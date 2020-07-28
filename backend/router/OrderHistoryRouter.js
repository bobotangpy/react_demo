const express = require('express');
const knexFilte = require('../knexfile')['development'];

class OrderHistoryRouter {
    constructor(orderHistoryService) {
        this.orderHistoryService = orderHistoryService
    }

    router() {
        let router = express.Router();
        router.get('/', this.post.bind(this));
        router.post('/', this.post.bind(this));
        return router;
    }

    get(req, res) {
        return this.orderHistoryService
        .list(req.body.user_id)
        .then((order) => res.json(order))
        .catch((err) => res.status(500).json(err));
    }

    post(req, res) {
        return this.orderHistoryService
        .add(req.body.user_id)
        .then((msg) => res.json(msg))
        .catch((err) => res.status(500).json(err));
    }
}

module.exports = OrderHistoryRouter;