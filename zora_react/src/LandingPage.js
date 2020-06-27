import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./screens/HomePage";
import SignUpPage from "./screens/SignUpPage";
import ProductsPage from "./screens/ProductsPage";

export default class LandingPage extends React.Component {
    render(){
        return(
            <Router>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/signup' component={SignUpPage} />
                <Route exact path='/products' component={ProductsPage} />
            </Router>
        )
    }
}