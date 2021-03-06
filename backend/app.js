const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const path = require('path');

require('dotenv').config();

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
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../zora_react/build')));
//   app.use(express.static(__dirname, '../zora_react/build'));

  // app.get('*', (req, res) => {
  //   let url = path.join(__dirname, '../zora_react', 'build', 'index.html');
  //   if (!url.startsWith('/app/')) // since we're on local windows
  //     url = url.substring(1);
  //   res.sendFile(url);
  // });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../zora_react/', 'build', 'index.html'));
  })

  const {Pool, Client} = require('pg');
//   const pg = require('pg');
//   if (process.env.DATABASE_URL) {
//     pg.defaults.ssl = true;
//   }
  let connectionString = process.env.DATABASE_URL || 'postgres://vjarusflltpmqg:cc6445593d88271a841a46f4fc4172a71e93fcba1936edb2fe336d13c2730c82@ec2-54-237-155-151.compute-1.amazonaws.com:5432/dcf5t1656427i5';
  console.log(process.env.DATABASE_URL);
  const pool = new Pool({ connectionString });
  pool.query('SELECT * FROM clothes', (err, res) => {
    console.log(err, res.rows[0])
    pool.end()
  })
  const client = new Client({
    connectionString,
  })
  client.connect()
  client.query('SELECT * FROM clothes', (err, res) => {
    console.log(err, res.rows[0])
    client.end()
  })

  //   const pool = new pg.Pool({ connectionString: connectionString });
//   pool.connect((err, client, done) => {
//     if (err) {
//       console.log(err)
//     } else {
//       var query_get_value = 'SELECT * FROM clothes';
//       client.query(query_get_value, (err, result) => {
//         done();
//         if (err) {
//           throw err;
//         }
//         var rows = result.rows;
//         console.log(rows[0])
//       }
//     )}
//   });
}

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect Route & Service
const loginService = new LoginService(knex);
const loginRoute = new LoginRoute(loginService);

const signUpService = new SignUpService(knex);
const signUpRoute = new SignUpRoute(signUpService);

const clothesHighlightsService = new ClothesHighlightsService(knex);
const clothesHighlightsRoute = new ClothesHighlightsRouter(clothesHighlightsService);

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
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Application is listening to ${port}`);
});
