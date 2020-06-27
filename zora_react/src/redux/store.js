import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// import { signUpReducer as SignUpReducer } from './signUp/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    // signUp: SignUpReducer,
  }),
  composeEnhancers(applyMiddleware(thunk, logger))
);
