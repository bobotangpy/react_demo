import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { authReducer as authReducer } from "./auth/reducers";
import { signUpReducer as signUpReducer } from './signup/reducers';
import { productsStyleReducer as productsStyleReducer } from './productsStyle/reducers';
import { productsTypeReducer as productsTypeReducer } from './productsType/reducers';
import { productsListReducer as productsListReducer } from './productsList/reducers';
import { productInfoReducer as productInfoReducer } from './productInfo/reducers';
import { suggestionsReducer as suggestionsReducer } from './suggestions/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    auth: authReducer,
    signUp: signUpReducer,
    productsStyle: productsStyleReducer,
    productsType: productsTypeReducer,
    productsList: productsListReducer,
    productInfo: productInfoReducer,
    suggestions: suggestionsReducer
  }),
  composeEnhancers(applyMiddleware(thunk, logger))
);
