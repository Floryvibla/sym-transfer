import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension'

import { othersReducers } from '../reducers'

export const store= createStore(
    combineReducers({
        others: othersReducers
    }),
    // composeWithDevTools(applyMiddleware(thunkMiddleware))
)