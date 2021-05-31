import { combineReducers } from "redux";

import actionsReducer from "./actions";
import dateReducer from "./dateReducer";

const allReducer = combineReducers({
  actions: actionsReducer,
  date: dateReducer,
});

export default allReducer;
