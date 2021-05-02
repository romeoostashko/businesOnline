import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  GET_ORDERS_DB,
  GET_PRODUCTS_DB,
  GET_USERS_DB,
} from "./constants";
import { ActionObject } from "./types";
import { userNames } from "../../data/dammy";

const initialState = {
  orders: {},
  users: {},
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
      const formProdacts: object[] = [];
      Object.entries(dataProducts).forEach((i: any) =>
        formProdacts.push({ ...i[1], id: i[0] })
      );
      return { ...state, products: formProdacts };
    }

    case GET_USERS_DB: {
      let dataUsers = { ...payload };
      if (!payload) {
        dataUsers = {};
      }
      const formUsers: object[] = [];
      Object.entries(dataUsers).forEach((i: any) =>
        formUsers.push({ ...i[1], id: i[0] })
      );
      return { ...state, users: formUsers };
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
