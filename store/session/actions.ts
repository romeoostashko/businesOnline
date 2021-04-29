import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  SESSION_UPDATE_CUSTOMER,
  GET_ORDERS_DB,
  DELETE_ORDER,
  GET_PRODUCTS_DB,
} from "./constants";
import { NewCustomer } from "./types";
import {
  LINK_FIREBASE_ORDERS,
  LINK_FIREBASE_PRODUCTS,
} from "../../constants/constants";
import { NewProduct } from "../../screens/DetailProductScreen/types";

const getOrdersDBActions = (payload: []) => ({ type: GET_ORDERS_DB, payload });

const getProductsAction = (payload: {}) => ({
  type: GET_PRODUCTS_DB,
  payload,
});

/*-------------------*/

/*** DELETE PRODUCT ***/
export const deleteProduct = (id: string) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE_PRODUCTS + "/" + id + ".json", {
    method: "DELETE",
    headers: { "Content-Type": "aplication/json" },
  });

  const res1 = await fetch(LINK_FIREBASE_PRODUCTS + ".json");
  const resData = await res1.json();
  return dispatch(getProductsAction(resData));
};

/*** DELETE ORDER ***/
export const deleteOrder = (id: string) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE_ORDERS + "/" + id + ".json", {
    method: "DELETE",
    headers: { "Content-Type": "aplication/json" },
  });

  const res1 = await fetch(LINK_FIREBASE_ORDERS + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));
};

/*** GET ORDER ***/
export const getOrdersDB = (setLoad: (arg: boolean) => void) => async (
  dispatch: any
) => {
  //async code
  setLoad(false);
  const res = await fetch(LINK_FIREBASE_ORDERS + ".json");
  const resData = await res.json();
  console.log("getOrdersDB");
  setLoad(true);

  return dispatch(getOrdersDBActions(resData));
};

/*** GET PRODUCTS ***/
export const getProducts = (setLoad: (arg: boolean) => void) => async (
  dispatch: any
) => {
  //async code
  setLoad(false);
  const res = await fetch(LINK_FIREBASE_PRODUCTS + ".json");
  const resData = await res.json();
  console.log("getProductsDB");
  setLoad(true);
  return dispatch(getProductsAction(resData));
};

/*** SET NEW ORDER ***/
export const setNewCustomer = (data: NewCustomer) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE_ORDERS + ".json", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE_ORDERS + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));
};

/*** SET NEW PRODUCT ***/
export const setNewProduct = (data: NewProduct) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE_PRODUCTS + ".json", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  //const res1 = await fetch(LINK_FIREBASE_PRODUCTS + ".json");
  //const resData = await res1.json();
  //return dispatch(getOrdersDBActions(resData));
};

/*** UPDATE ORDER ***/
export const updateCustomer = (data: NewCustomer, id: string) => async (
  dispatch: any
) => {
  //async code

  const res = await fetch(LINK_FIREBASE_ORDERS + "/" + id + ".json", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE_ORDERS + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));

  //const resData = await res.json();
  //console.log(resData);
  //return dispatch(updateCustomerAction(data));
};

/*** UPDATE PRODUCT ***/
export const updateProduct = (data: NewProduct, id: string) => async (
  dispatch: any
) => {
  //async code

  const res = await fetch(LINK_FIREBASE_PRODUCTS + "/" + id + ".json", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE_PRODUCTS + ".json");
  const resData = await res1.json();
  return dispatch(getProductsAction(resData));
};
