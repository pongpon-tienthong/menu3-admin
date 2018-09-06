import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import restaurantReducer from "./reducers/restaurantReducer";
import thunk from "../../node_modules/redux-thunk";

const rootReducer = combineReducers({
  restaurants: restaurantReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;