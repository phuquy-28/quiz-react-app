import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducuer from "./userReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducuer,
});

export default rootReducer;
