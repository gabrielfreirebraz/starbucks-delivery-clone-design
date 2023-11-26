declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";

interface IAppContext {
  products: TProduct[];
  cartItems?: TCartItem[] | null;
  onClickAddCart: (newItem: TCartItem) => void;
}

type TCartItem = {
  name: string;
  desc?: string;
  price: number;
  image?: string;
};

type TProduct = {
  name: string;
  desc?: string;
  price: number;
  image?: string;
};
