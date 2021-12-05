import authReducer from "./login";
import basketItems from "./basket";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authReducer,
  basketItems,
});

export default allReducers;
