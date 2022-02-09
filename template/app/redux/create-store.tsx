import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';
import rootSaga from '../sagas';
import logger from 'redux-logger';

const composeEnhancers = compose;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware, logger];

// mount it on the Store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleWares)),
);

// then run the saga
sagaMiddleware.run(rootSaga);
export default store;
