import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import restaurantReducer from "./reducers/restaurantReducer";
import menuItemReducer from "./reducers/menuItemReducer";
import authReducer from "./reducers/authReducer";
import thunk from "../../node_modules/redux-thunk";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  menuItems: menuItemReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;