import authReducer from "./login";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authReducer,
});

export default allReducers;
