import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import typingReducer from "./typingReducer";

const reducers = combineReducers({
    count:counterReducer,
    typing:typingReducer
})

export default reducers; //this gets imported in src/state/store.js