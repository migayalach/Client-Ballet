import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = composeWithDevTools || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);


export default store;
