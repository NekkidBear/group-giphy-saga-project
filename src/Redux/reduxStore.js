import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeLatest, put} from 'redux-saga/effects'
import axios from 'axios';

// this is the saga that will watch for actions
function* rootSaga() {
    yield takeLatest('ADD_TO_FAVORITES', );
    yield takeLatest('SET_CATEGORY', );
    yield takeLatest('FETCH_GIFS',);
    yield takeLatest('FETCH_FAVS',);
  }
  
  const sagaMiddleware = createSagaMiddleware();
  
  // This is creating the store
  // the store is the big JavaScript Object that holds all of the information for our application
  const store = createStore(
    // This function is our first reducer
    // reducer is a function that runs every time an action is dispatched
    combineReducers({
     
    }),
    applyMiddleware(sagaMiddleware, logger),
  );
  
  sagaMiddleware.run(rootSaga);
  
  
  export default store;