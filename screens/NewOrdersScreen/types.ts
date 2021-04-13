export type Order = {
  id: string;
  name: string;
  totalPrice: number;
  isPaid: boolean;
  isSheep: boolean;
  isGiven: boolean;
  comment: string;
  adress: string;
  products: NewOrder[];
  profit: number;
  totalPriceOrigin: number;
};

export type NewOrder = {
  nameProduct: string;
  price: string;
  priceOrigin: string;
  number: string;
  profit: number;
};
