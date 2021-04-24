import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  GET_ORDERS_DB,
} from "./constants";
import { ActionObject } from "./types";
import { orders, userNames, products } from "../../data/dammy";

const initialState = {
  orders: {},
  userNames: userNames,
  products: products,
};

export const sessionReduser = (state = initialState, action: ActionObject) => {
  const { type, payload } = action;
  switch (type) {
    case SESSION_STATE:
      return state;
    case SESSION_NEW_CUSTOMER:
      //console.log(payload);
      return { ...state, orders: state?.orders?.concat(payload) };
    case GET_ORDERS_DB:
      //console.log("payload", payload);
      let data = payload;
      if (!payload) {
        data = {};
      }
      return { ...state, orders: data };

    default:
      return state;
  }
};
