import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  movies: moviesReducer,
  loading: loadingReducer
});
