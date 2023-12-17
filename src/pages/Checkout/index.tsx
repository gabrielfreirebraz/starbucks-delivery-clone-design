import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider } from "../../contexts/defaultContext";



export const Checkout = () => {

  const { cartOn } = useContext(AppProvider);

  return  (

    <>
      <h1>Checkout page</h1>

      <Cart on={cartOn}></Cart>
    </>
  );
}