import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./src/screens/HomePage";
import SignUpPage from "./src/screens/SignUpPage";
import ProductsPage from "./src/screens/ProductsPage";

export class LandingPage extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/signup' component={SignUpPage} />
                <Route exact path='/products' component={ProductsPage} />
            </BrowserRouter>
        )
    }
}