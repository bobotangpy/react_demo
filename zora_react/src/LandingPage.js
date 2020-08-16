import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./screens/HomePage";
import SignUpPage from "./screens/SignUpPage";
import ProductsPage from "./screens/ProductsPage";
import NoMatchPage from "./screens/NoMatchPage";
import OrderHistoryPage from "./screens/OrderHistoryPage";

// Google Analytics
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// Initialize google analytics page view tracking
// history.listen(location => {
//   ReactGA.initialize('UA-172709798-2');
//   ReactGA.set({ page: location.pathname }); // Update the user's current page
//   ReactGA.pageview(location.pathname); // Record a pageview for the given page
// });

export default class LandingPage extends React.Component {
    render(){
        return(
            <BrowserRouter >
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/signup' component={SignUpPage} />
                    <Route exact path='/products' component={ProductsPage} />
                    <Route exact path='/women' component={ProductsPage} />
                    <Route exact path='/men' component={ProductsPage} />
                    <Route exact path='/myorder' component={OrderHistoryPage} />
                    <Route component={NoMatchPage} />
                    {/* <Route path='/details' component={ProductInfoPage} /> */}
                </Switch>
            </BrowserRouter>
        )
    }
}