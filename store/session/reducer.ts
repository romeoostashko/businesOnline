import { SESSION_STATE, SESSION_NEW_CUSTOMER } from "./constants";
import { ActionObject } from "./types";

const initialState = {
  customers: [
    {
      id: "1",
      name: "Roma",
      purchases: "Куртка",
      price: 20,
      isPaid: true,
    },
  ],
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
