import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  SESSION_UPDATE_CUSTOMER,
  GET_ORDERS_DB,
  DELETE_ORDER,
} from "./constants";
import { NewCustomer } from "./types";

const LINK_FIREBASE =
  "https://business-online-7aba7-default-rtdb.europe-west1.firebasedatabase.app/orders";

const setNewCustomerAction = (payload: NewCustomer) => ({
  type: SESSION_NEW_CUSTOMER,
  payload,
});

const updateCustomerAction = (payload: NewCustomer) => ({
  type: SESSION_UPDATE_CUSTOMER,
  payload,
});

const getOrdersDBActions = (payload: []) => ({ type: GET_ORDERS_DB, payload });
const deleteOrderActions = () => ({ type: DELETE_ORDER });

/*-------------------*/

export const getOrdersDB = () => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + ".json");
  const resData = await res.json();
  console.log("getOrdersDB");

  return dispatch(getOrdersDBActions(resData));
};

export const setNewCustomer = (data: NewCustomer) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + ".json", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));
};

export const updateCustomer = (data: NewCustomer, id: string) => async (
  dispatch: any
) => {
  //async code

  const res = await fetch(LINK_FIREBASE + "/" + id + ".json", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));

  //const resData = await res.json();
  //console.log(resData);
  //return dispatch(updateCustomerAction(data));
};
