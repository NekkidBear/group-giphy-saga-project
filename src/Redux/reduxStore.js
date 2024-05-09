import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import 'dotenv/config';

const {GIPHY_API_KEY} = process.env;

//Reducer to hold favorited GIPHYs
const GIPHYs = (state = [], action) => {
  switch (action.type) {
    case "SET_GIPHYs":
      return action.payload;
    default:
      return state;
  }
};




function* onLoadGifs() {
  //This saga loads the trending GIFS on the initial page load
  try {
    let response = yield axios({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}&&limit=5&&rating=g`,
    });
    yield put({
      type: "SET_GIPHYs",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to fetch trending GIFs.", error);
  }
}

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
  yield takeLatest("LOAD_TRENDING", onLoadGifs);
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

export default reduxStore;
