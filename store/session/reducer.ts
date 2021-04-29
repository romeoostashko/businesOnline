import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  GET_ORDERS_DB,
  GET_PRODUCTS_DB,
} from "./constants";
import { ActionObject } from "./types";
import { userNames } from "../../data/dammy";

const initialState = {
  orders: {},
  userNames: userNames,
  products: {},
};

export const sessionReduser = (state = initialState, action: ActionObject) => {
  const { type, payload } = action;
  switch (type) {
    case SESSION_STATE:
      return state;
    case SESSION_NEW_CUSTOMER:
      //console.log(payload);
      return { ...state, orders: state?.orders?.concat(payload) };

    case GET_PRODUCTS_DB: {
      let dataProducts = { ...payload };
      if (!payload) {
        dataProducts = {};
      }
      return { ...state, products: dataProducts };
    }

    case GET_ORDERS_DB: {
      //console.log("payload", payload);
      let dataOrders = { ...payload };
      if (!payload) {
        dataOrders = {};
      }
      return { ...state, orders: dataOrders };
    }

    default:
      return state;
  }
};
