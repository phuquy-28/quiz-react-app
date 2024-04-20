import { combineReducers } from "redux";
import userReducuer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducuer,
});

export default rootReducer;
