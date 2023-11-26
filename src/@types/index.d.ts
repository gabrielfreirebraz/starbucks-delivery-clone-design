declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";

interface IAppContext {}

type TCartItem = {
  name: string;
  desc?: string;
  price: number;
};

type TProduct = {
  name: string;
  desc?: string;
  price: number;
};

interface IProviderProps {
  products: TProduct[];
  cartItems?: TCartItem[] | null;
  onClickAddCart: (newItem: TCartItem) => void;
}
