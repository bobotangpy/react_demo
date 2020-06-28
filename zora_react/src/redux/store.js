import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { signUpReducer as signUpReducer } from './signup/reducers';
import { productsStyleReducer as productsStyleReducer } from './productsStyle/reducers';
import { productsTypeReducer as productsTypeReducer } from './productsType/reducers';
import { productsListReducer as productsListReducer } from './productsList/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    signUp: signUpReducer,
    productsStyle: productsStyleReducer,
    productsType: productsTypeReducer,
    productsList: productsListReducer,

  }),
  composeEnhancers(applyMiddleware(thunk, logger))
);
