import {
  SESSION_STATE,
  SESSION_NEW_CUSTOMER,
  SESSION_UPDATE_CUSTOMER,
} from "./constants";
import { NewCustomer } from "./types";

const setNewCustomerAction = (payload: NewCustomer) => ({
  type: SESSION_NEW_CUSTOMER,
  payload,
});

const updateCustomerAction = (payload: NewCustomer) => ({
  type: SESSION_UPDATE_CUSTOMER,
  payload,
});

/*-------------------*/

export const setNewCustomer = (data: NewCustomer) => async (dispatch: any) => {
  //async code
  const res = await fetch(
    "https://business-online-7aba7-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(data),
    }
  );
  const resData = await res.json();
  console.log(resData);
  return dispatch(setNewCustomerAction({ ...data, id: resData.name }));
};

export const updateCustomer = (data: NewCustomer) => async (dispatch: any) => {
  //async code
  const res = await fetch(
    "https://business-online-7aba7-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
    {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(data),
    }
  );
  const resData = await res.json();
  console.log(resData);
  return dispatch(updateCustomerAction(data));
};
