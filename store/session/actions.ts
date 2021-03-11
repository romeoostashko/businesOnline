import { SESSION_STATE, SESSION_NEW_CUSTOMER } from "./constants";
import { NewCustomer } from "./types";

const setNewCustomerAction = (payload: NewCustomer) => ({
  type: SESSION_NEW_CUSTOMER,
  payload,
});

/*-------------------*/

export const setNewCustomer = (data: NewCustomer) => (dispatch: any) =>
  dispatch(setNewCustomerAction(data));
