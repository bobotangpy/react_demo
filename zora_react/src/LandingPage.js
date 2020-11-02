import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./screens/HomePage";
import SignUpPage from "./screens/SignUpPage";
import ProductsPage from "./screens/ProductsPage";
import NoMatchPage from "./screens/NoMatchPage";
import OrderHistoryPage from "./screens/OrderHistoryPage";

// Google Analytics
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.initialize("UA-172709798-2");
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

export default class LandingPage extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route exact path="/products">
            <ProductsPage />
          </Route>
          <Route exact path="/women">
            <ProductsPage />
          </Route>
          <Route exact path="/men">
            <ProductsPage />
          </Route>
          <Route exact path="/myorder">
            <OrderHistoryPage />
          </Route>
          <Route>
            <NoMatchPage />
          </Route>
          {/* <Route path='/details' component={ProductInfoPage} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
