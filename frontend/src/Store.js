import {  combineReducer,applyMiddleware } from "redux";
import { createStore } from "react-redux"
import {composeWithDevTools}  from "redux-devtools-extension";

import thunk from "redux-thunk"


const rootReducer = combineReducer({

});

const initialState ={}


const middleware = [thunk]

const store = createStore(rootReducer,initialState,composeWithDevTools(applymiddlware(...middleware)));



export default store