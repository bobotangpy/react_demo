import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./screens/HomePage";
import SignUpPage from "./screens/SignUpPage";
import ProductsPage from "./screens/ProductsPage";
import ProductInfoPage from "./screens/ProductDetailsPage";

export default class LandingPage extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/signup' component={SignUpPage} />
                    <Route exact path='/products' component={ProductsPage} />
                    <Route exact path='/women' component={ProductsPage} />
                    <Route exact path='/men' component={ProductsPage} />
                    <Route path='/details' component={ProductInfoPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}