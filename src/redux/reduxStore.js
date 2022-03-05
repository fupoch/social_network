import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  siteBar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
