import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { restAPI } from "./reducer/restReducer";

export default createStore(
  restAPI,
  composeWithDevTools(applyMiddleware(thunk))
);
