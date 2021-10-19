import { combineReducers } from "redux";
import { cardReducer } from "./Cards/cardReducer";

export const rootReducer = combineReducers({ cardReducer });
