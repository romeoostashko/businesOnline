export type Order = {
  id: string;
  name: string;
  totalPrice: number;
  isPaid: boolean;
  isSheep: boolean;
  isGiven: boolean;
  comment: string;
  adress: string;
  products: [];
  profit: number;
  totalPriceOrigin: number;
};

export type NewProduct = {
  name: string;
  price: string;
  priceOrigin: string;
  number: number;
  profit: number;
  comment: string;
};
