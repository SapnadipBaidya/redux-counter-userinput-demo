
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from "redux-thunk";
import reducers from "./reducers"

const middleWares = [thunk];

export const store = createStore(
    reducers,
    {},
    compose( applyMiddleware(...middleWares))
   
)
