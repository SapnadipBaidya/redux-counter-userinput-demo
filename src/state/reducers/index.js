import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import typingReducer from "./typingReducer";
import catdogReducer from "./catdogReducer";
import asyncReducers from "./asyncReducers"
const reducers = combineReducers({
    count:counterReducer,
    typing:typingReducer,
    catdog:catdogReducer,
    asynDATA:asyncReducers
})

export default reducers; //this gets imported in src/state/store.js