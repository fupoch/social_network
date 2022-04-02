import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import thunkMiddleWare from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  siteBar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>
type PropertiesType<T> = T extends {[key:string]: infer U} ? U : never
export type InfernActionsType<T extends {[key:string]: (...args: any[])=>any}> = ReturnType<PropertiesType<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleWare))
);

// let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
// @ts-ignore
window.store = store

export default store
