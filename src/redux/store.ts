import { applyMiddleware, combineReducers, createStore } from "redux";
import { shopReducer } from "./reducers/shop";
import { productReducer } from "./reducers/products";
import { couponReducer } from "./reducers/coupon";
import { ordersReducer } from "./reducers/orders";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  shopReducer,
  productReducer,
  couponReducer,
  ordersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
