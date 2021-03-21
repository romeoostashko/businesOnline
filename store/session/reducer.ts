import { SESSION_STATE, SESSION_NEW_CUSTOMER } from "./constants";
import { ActionObject } from "./types";
import { orders } from "../../data/dammy";

const initialState = {
  orders: orders,
};

export const sessionReduser = (state = initialState, action: ActionObject) => {
  const { type, payload } = action;
  switch (type) {
    case SESSION_STATE:
      return state;
    case SESSION_NEW_CUSTOMER:
      console.log(payload);
      return { ...state, customers: state.customers.concat([payload]) };

    default:
      return state;
  }
};
