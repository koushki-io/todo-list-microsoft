
import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { Tasks,Update ,RightSide} from "./reducer";

const reducerc=combineReducers({
 Tasks,
  update:Update,
  rightSide:RightSide
  
})

const Day=localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) :[]


const initialState={
  Tasks:Day
}
const middleware=[thunk]
export const store = createStore(reducerc,initialState,composeWithDevTools(applyMiddleware(...middleware)))






