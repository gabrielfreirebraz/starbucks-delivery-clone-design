declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.svg";

interface IAppContext {
  products: IProduct[];
  cartItems?: ICartItem[] | null;
  onClickAddCart: (...props) => void;
  onClickRemoveCart: (id: string | null) => void;
  cartOn: boolean;
  setCartOn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProduct {
  productId: number;
  name: string;
  desc?: string;
  price: number;
  quantity?: number;
  image?: string;
}

interface ICartItem extends IProduct {
  itemId: string;
}
