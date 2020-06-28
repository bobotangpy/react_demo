const express = require("express");
const session = require("express-session");
const setupPassport = require("./passport/passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

// Require Files
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

// const stripe = require("stripe")("pk_test_fcZ614e9OlUYxHihml2qDRNW00HwgZPpJU");

// require("dotenv").config();

// Middlewares
const app = express();
const knexConfig = require("./knexfile")["development"];
const knex = require("knex")(knexConfig);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
setupPassport(app);

// Connect Route & Service
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

// API Routes
app.use("/api/clothes/highlights", clothesHighlightsRoute.router());
app.use("/api/clothes", clothesRoute.router());
app.use("/api/clothes/trend", clothesTrendRoute.router());
app.use("/api/clothes/productTypeInfo", productTypeRoute.router());
app.use("/api/productInfo", productRoute.router());
app.use("/api/suggestion", suggestionRoute.router());
app.use("/api/cart/", cartRoute.router());

// const keySecret = process.env.SECRET_KEY;
// const stripe = require("stripe")(keySecret);

// app.post("/v1/charge", function(req, res) {
//   let token = req.body.stripeToken;
//   let chargeAmount = req.body.chargeAmount;
//   var charge = stripe.charges.create(
//     {
//       amount: chargeAmount,
//       currency: "HKD",
//       source: token
//     },
//     function(err, charge) {
//       if (err) {
//         console.log("Your Card was declined...");
//       }
//       console.log(charge);
//     }
//   );
//   console.log("???????");
//   console.log("payment worked?");

//   res.redirect("/success");
// });

app.listen(8880, () => {
  console.log(`Application is listening to port 8880`);
});