
import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { Tasks,Update ,RightSide,newList,LeftSide} from "./reducer";

const reducerc=combineReducers({
 Tasks,
  update:Update,
  rightSide:RightSide,
  leftSide:LeftSide,
  newList:newList
  
})

const tasks=localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) :[]
const newListSave=localStorage.getItem("newList") ? JSON.parse(localStorage.getItem("newList")) :[]
const initialState={
  Tasks:tasks,
  newList:newListSave
}
const middleware=[thunk]
export const store = createStore(reducerc,initialState,composeWithDevTools(applyMiddleware(...middleware)))






