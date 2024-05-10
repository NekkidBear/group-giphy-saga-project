import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { takeLatest, put, take } from "redux-saga/effects";
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

//Reducer to hold categories 
const categories= (state=[],action)=>{
  switch (action.type){
    case "FETCH_CATEGORIES":
      return action.payload;
    default:
      return state;
      
}}

//get initial category list
function* fetchCategories(){
  try{
    const response = yield axios({
      method: "GET",
      url: "/api/categories"
    }); 
    // console.log.apply('response.data is', response.data)
    yield put({type:"FETCH_CATEGORIES", payload: response.data });
  }
  catch (error){
    console.log("error fetching categories", error)
  }}


//this function will be used to get trending GIFS 
//that load initially before searching (STRETCH GOAL)
function* getTrendingGIPHYs(){
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/giphy/trending",
    });
    yield put({ type: "SET_GIPHYs", payload: response.data });
  } catch (error) {
    console.log("error", error);
  }
}

function* addToFavs(action) {
  console.log(action.payload)
try{
  let response = yield axios({
    method: "POST",
    url: '/api/favorites',
    data: action.payload
  })
  yield put({
    type: "FETCH_FAVS"
  })
  console.log("added favorite")
} catch(error){
  console.log('error adding favorite', error)
}

}

function* setCategory() {
  //todo
}

//this sends search terms to the API and then stores the result in the Redux State

function* searchGIFS(action) {
  try {
    console.log("action.payload is", action.payload)
    const searchTerms = action.payload
    const response = yield axios({
      method: "GET",
      url: `/api/giphy/search?q=${searchTerms}`,
    });
    yield put({ type: "SET_GIPHYs", payload: response.data });
  } catch (error) {
    console.log("error", error);
  }
}

//function to fetch favorited giphys to render to the favorite view 
function* fetchFavs(){
  try {
    let response = yield axios({
      method: 'GET',
      url: '/api/favorites'
    }) 
    yield put({
      type: 'SET_GIPHYs',
      payload: response.data  
    })
  } catch(error){
    console.log('Error in GET GIPHY favorites', error);
  }
}

// this is the saga that will watch for actions
function* rootSaga() {
  yield takeLatest("ADD_TO_FAVORITES", addToFavs);
  yield takeLatest("SET_CATEGORY", setCategory);
  yield takeLatest("GET_CATEGORIES", fetchCategories);
  yield takeLatest("FETCH_GIFS", searchGIFS);
  yield takeLatest("FETCH_FAVS", fetchFavs);
  yield takeLatest("FETCH_TRENDING", getTrendingGIPHYs);
}

const sagaMiddleware = createSagaMiddleware();

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const giphyStore = createStore(
  // This function is our first reducer
  // reducer is a function that runs every time an action is dispatched
  combineReducers({
    GIPHYs,
    categories
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

export default giphyStore;
