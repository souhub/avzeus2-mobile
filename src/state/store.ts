import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"

import * as reducers from "./ducks" // import all reducers from ducks/index.js
import { RootState } from "./ducks/types"

const rootReducer = combineReducers(reducers)

const initialState = {}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const middlewares = [thunk]

// composeしたものを使うと謎のエラーになる（おそらくIOS15のせい）
const store = createStore(
  rootReducer,
  initialState,
  composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
)

export { store }
