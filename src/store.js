import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "./reducers/quiz";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({
  quiz: quiz.reducer,
});

export default store;
