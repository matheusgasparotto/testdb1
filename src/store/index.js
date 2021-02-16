import { createStore, combineReducers } from "redux";
import player from "./modules/InfoPlayer/reducer";

const reducers = combineReducers({ player });

const store = createStore(reducers);

export default store;
