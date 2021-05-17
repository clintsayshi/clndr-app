import { combineReducers } from "redux";

import actionsReducer from "./actions";

const allReducer = combineReducers({
  actions: actionsReducer,
});

export default allReducer;
