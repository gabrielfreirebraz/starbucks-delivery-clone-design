import { CartContainer } from "./styles"


export const Cart = (props: { on: boolean }) => {

  const cartOn = props.on ? 1 : 0;
  return (
    <CartContainer on={cartOn}></CartContainer>
  );
}