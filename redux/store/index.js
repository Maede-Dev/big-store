import { createStore } from "redux";
import allReducers from "../reducers";
// STORE
const MyStore = createStore(allReducers);

export default MyStore;
