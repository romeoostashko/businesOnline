import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  SESSION_UPDATE_CUSTOMER,
  GET_ORDERS_DB,
  DELETE_ORDER,
} from "./constants";
import { NewCustomer } from "./types";
import { LINK_FIREBASE } from "../../constants/constants";

const getOrdersDBActions = (payload: []) => ({ type: GET_ORDERS_DB, payload });

/*-------------------*/
export const deleteOrder = (id: string) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + "/" + id + ".json", {
    method: "DELETE",
    headers: { "Content-Type": "aplication/json" },
  });

  const res1 = await fetch(LINK_FIREBASE + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));
};

export const getOrdersDB = (setLoad: (arg: boolean) => void) => async (
  dispatch: any
) => {
  //async code
  setLoad(false);
  const res = await fetch(LINK_FIREBASE + ".json");
  const resData = await res.json();
  console.log("getOrdersDB");
  setLoad(true);

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
