import {combineReducers} from 'redux';

// combine index
// this is places where we using for define state's name.
const reducers = combineReducers({
  app: require('./app-redux').reducer,
  product: require('./product-redux').reducer,
});

export default reducers;
