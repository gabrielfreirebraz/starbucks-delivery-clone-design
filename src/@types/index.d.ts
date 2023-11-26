declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";

interface IAppContext {
  products: TProduct[];
  cartItems?: TCartItem[] | null;
  onClickAddCart: (...props) => void;
}

type TProduct = {
  name: string;
  desc?: string;
  price: number;
  quantity?: number;
  image?: string;
};

type TCart = {
  productItems: TProduct[];
  totalPrice: number;
};
