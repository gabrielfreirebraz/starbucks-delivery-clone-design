import { useContext } from "react";
import { Cart } from "../../components/Cart";
import { AppProvider } from "../../contexts/defaultContext";


export const Success = () => {

  const { cartOn } = useContext(AppProvider);

  return (
    <>
      <h1>Success page</h1>

      <Cart on={cartOn}></Cart>
    </>
  );
}