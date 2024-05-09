import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

//Reducer to hold favorited GIPHYs
const GIPHYs = (state = [], action) => {
  switch (action.type) {
    case "SET_GIPHYs":
      return action.payload;
    default:
      return state;
  }
};


function* addToFavs(){
    //todo

}
function* setCategory(){
    //todo

}
function* searchGIFS(){
    //todo

}
function* fetchFavs(){
    //todo

}

// this is the saga that will watch for actions
function* rootSaga() {
  yield takeLatest("ADD_TO_FAVORITES", addToFavs);
  yield takeLatest("SET_CATEGORY", setCategory);
  yield takeLatest("FETCH_GIFS", searchGIFS);
  yield takeLatest("FETCH_FAVS", fetchFavs);
}

const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const store = createStore(
  // This function is our first reducer
  // reducer is a function that runs every time an action is dispatched
  combineReducers({
    GIPHYs
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default store;
