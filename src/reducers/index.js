import nameReducer  from "./nameList";
import todoReducer from "./todoList";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    names: nameReducer,
    todos: todoReducer
})

export default rootReducer;