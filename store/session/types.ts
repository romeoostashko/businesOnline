export type ActionObject = {
  type: string;
  payload: any;
};

export type NewCustomer = {
  id: number;
  name: string;
  purchases: string;
  price: number;
  isPaid: boolean;
};
