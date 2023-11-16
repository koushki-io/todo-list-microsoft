
import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { MyDay } from "./reducer";

const reducerc=combineReducers({
  myDay:MyDay
})

const Day=localStorage.getItem("myDay") ? JSON.parse(localStorage.getItem("myDay")) :[]


const initialState={
  myDay:Day
}
const middleware=[thunk]
export const store = createStore(reducerc,initialState,composeWithDevTools(applyMiddleware(...middleware)))






