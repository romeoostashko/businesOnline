import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  SESSION_UPDATE_CUSTOMER,
  GET_ORDERS_DB,
  DELETE_ORDER,
  GET_PRODUCTS_DB,
  GET_USERS_DB,
} from "./constants";
import { NewCustomer } from "./types";
import { LINK_FIREBASE } from "../../constants/constants";
import {
  NewProduct,
  User,
  Order,
} from "../../screens/DetailProductScreen/types";

const getOrdersDBActions = (payload: []) => ({ type: GET_ORDERS_DB, payload });

const getUsersAction = (payload: {}) => ({ type: GET_USERS_DB, payload });

const getProductsAction = (payload: {}) => ({
  type: GET_PRODUCTS_DB,
  payload,
});

/*-------------------*/

/*** DELETE PRODUCT ***/
export const deleteProduct = (id: string) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + "products" + "/" + id + ".json", {
    method: "DELETE",
    headers: { "Content-Type": "aplication/json" },
  });

  const res1 = await fetch(LINK_FIREBASE + "products" + ".json");
  const resData = await res1.json();
  return dispatch(getProductsAction(resData));
};

/*** DELETE ORDER ***/
export const deleteOrder = (id: string) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + "orders" + "/" + id + ".json", {
    method: "DELETE",
    headers: { "Content-Type": "aplication/json" },
  });

  const res1 = await fetch(LINK_FIREBASE + "orders" + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));
};

/*** GET ORDER ***/
export const getOrdersDB = (setLoad: (arg: boolean) => void) => async (
  dispatch: any
) => {
  //async code
  setLoad(false);
  const res = await fetch(LINK_FIREBASE + "orders" + ".json");
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
  const res = await fetch(LINK_FIREBASE + "products" + ".json");
  const resData = await res.json();
  console.log("getProductsDB");
  setLoad(true);
  return dispatch(getProductsAction(resData));
};

/*** GET USERS ***/
export const getUsers = (setLoad: (arg: boolean) => void) => async (
  dispatch: any
) => {
  //async code
  setLoad(false);
  const res = await fetch(LINK_FIREBASE + "users" + ".json");
  const resData = await res.json();
  console.log("getUsersDB");
  setLoad(true);
  return dispatch(getUsersAction(resData));
};

/*** SET NEW ORDER ***/
export const setNewCustomer = (data: Order) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + "orders" + ".json", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + "orders" + ".json");
  const resData = await res1.json();
  return dispatch(getOrdersDBActions(resData));
};

/*** SET NEW PRODUCT ***/
export const setNewProduct = (data: NewProduct) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + "products" + ".json", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + "products" + ".json");
  const resData = await res1.json();
  return dispatch(getProductsAction(resData));
};

/*** SET NEW USER ***/
export const setNewUser = (data: User) => async (dispatch: any) => {
  //async code
  const res = await fetch(LINK_FIREBASE + "users" + ".json", {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + "users" + ".json");
  const resData = await res1.json();
  return dispatch(getUsersAction(resData));
};

/*** UPDATE ORDER ***/
export const updateCustomer = (data: Order, id: string) => async (
  dispatch: any
) => {
  //async code

  const res = await fetch(LINK_FIREBASE + "orders" + "/" + id + ".json", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + "orders" + ".json");
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

  const res = await fetch(LINK_FIREBASE + "products" + "/" + id + ".json", {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(data),
  });
  const res1 = await fetch(LINK_FIREBASE + "products" + ".json");
  const resData = await res1.json();
  return dispatch(getProductsAction(resData));
};
