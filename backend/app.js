const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const path = require('path');

require('dotenv').config();

// const jwt = require('jwt-simple');
// const config = require('./config');
// const session = require("express-session");
// const setupPassport = require("./passport/passport");


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


// Middlewares
const app = express();
const knexConfig = require("./knexfile")["development"];
const knex = require("knex")(knexConfig);
const authClass = require("./auth")(knex);
app.use(authClass.initialize());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());


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

// Added for Heroku
app.use(express.static(path.join(__dirname, '../zora_react/build')));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, './zora_react/public'));
// });


const port = process.env.PORT || 8880;
app.listen(port, () => {
  console.log(`Application is listening to port 8880`);
});