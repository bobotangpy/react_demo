const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

// Require Files
const LoginService = require("./service/LoginService");
const LoginRoute = require("./router/LoginRouter");

const SignUpService = require("./service/SignUpService");
const SignUpRoute = require("./router/SignUpRouter");

const ClothesHighlightsService = require("./service/ClothesHighlightsService");
const ClothesHighlightsRouter = require("./router/ClothesHighlightsRouter");

const ClothesService = require("./service/ClothesService");
const ClothesRouter = require("./router/ClothesRouter");

const ClothesTrendService = require("./service/ClothesTrendService");
const ClothesTrendRouter = require("./router/ClothesTrendRouter");

const ProductTypeService = require("./service/ProductTypeService");
const ProductTypeRouter = require("./router/ProductTypeRouter");

const ProductService = require("./service/ProductService");
const ProductRouter = require("./router/ProductRouter");

const SuggestionService = require("./service/SuggestionService");
const SuggestionRouter = require("./router/SuggestionRouter");

const CartService = require("./service/CartService");
const CartRouter = require("./router/CartRouter");

const OrderHistoryService = require("./service/OrderHistoryService");
const OrderHistoryRouter = require("./router/OrderHistoryRouter");

// Middlewares`
const app = express();
const knexConfig = require("./knexfile")["development"];
const knex = require("knex")(knexConfig);
const authClass = require("./auth")(knex);
app.use(authClass.initialize());

// Added for Heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../zora_react/build")));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../zora_react/", "build", "index.html"));

    // https://www.taniarascia.com/node-express-postgresql-heroku/#set-up-postgresql-database

    const pg = require("pg");
    const { Pool } = require("pg");
    const connectionString = `postgres://sjewnpxowusyim:145e4c947f84141a7d5ebb93e4ff2f47156774602ee3202ae631df7c143c14f5@ec2-35-168-77-215.compute-1.amazonaws.com:5432/dfsa2hpr105di3`;
    const pool = new Pool({ connectionString: connectionString });

    // const isProduction = process.env.NODE_ENV === "production";
    // const origin = {
    //   origin: isProduction ? "https://zora-2.herokuapp.com/" : "*",
    // };

    // const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

  //   pool.connect(function (err, client, done) {
  //     if (err) {
  //       console.log("not able to get connection " + err);
  //       res.status(400).send(err);
  //     }
  //     client.query("SELECT * FROM clothes", function (err, result) {
  //       done();
  //       if (err) {
  //         console.log(err);
  //         res.status(400).send(err);
  //       }
  //       res.status(200).send(result.rows);
  //       console.log(result);
  //     });
  //   });
  // });

  // const pool = new Pool({
  //   connectionString: isProduction
  //     ? process.env.DATABASE_URL
  //     : connectionString,
  //   ssl: isProduction,
  // });

  // pool.query("SELECT * FROM clothes", (err, res) => {
  //   console.log(err, res.rows[0]);
  // });

  const { Client } = require('pg');
  console.log(process.env.DATABASE_URL);
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  client.connect();

  client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    // client.end();
  });
});

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

// Connect Route & Service
const loginService = new LoginService(knex);
const loginRoute = new LoginRoute(loginService);

const signUpService = new SignUpService(knex);
const signUpRoute = new SignUpRoute(signUpService);

const clothesHighlightsService = new ClothesHighlightsService(knex);
const clothesHighlightsRoute = new ClothesHighlightsRouter(
  clothesHighlightsService
);

const clothesService = new ClothesService(knex);
const clothesRoute = new ClothesRouter(clothesService);

const clothesTrendService = new ClothesTrendService(knex);
const clothesTrendRoute = new ClothesTrendRouter(clothesTrendService);

const productTypeService = new ProductTypeService(knex);
const productTypeRoute = new ProductTypeRouter(productTypeService);

const productService = new ProductService(knex);
const productRoute = new ProductRouter(productService);

const suggestionService = new SuggestionService(knex);
const suggestionRoute = new SuggestionRouter(suggestionService);

const cartService = new CartService(knex);
const cartRoute = new CartRouter(cartService);

const orderHistoryService = new OrderHistoryService(knex);
const orderHistoryRoute = new OrderHistoryRouter(orderHistoryService);

// API Routes
app.use("/api/login", loginRoute.router());
app.use("/api/signup", signUpRoute.router());
app.use("/api/clothes/highlights", clothesHighlightsRoute.router());
app.use("/api/clothes", clothesRoute.router());
app.use("/api/clothes/trend", clothesTrendRoute.router());
app.use("/api/clothes/productTypeInfo", productTypeRoute.router());
app.use("/api/productInfo", productRoute.router());
app.use("/api/suggestion", suggestionRoute.router());
app.use("/api/cart/", cartRoute.router());
app.use("/api/orderHistory", orderHistoryRoute.router());

const port = process.env.PORT || 8880;
const host = "0.0.0.0";
app.listen(port, host, () => {
  console.log(`Application is listening to ${port}`);
});
