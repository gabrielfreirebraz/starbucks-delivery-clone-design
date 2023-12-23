import styled from "styled-components";

export const FormItemsContainer = styled.div`
  height: 100%;

  .block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .checkout-value__items {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      padding: 2rem 1rem;
      gap: 0.5rem;
      p,
      h5 {
        margin: 0 !important;
        padding: 0;
        color: ${(props) => props.theme.black};
      }
      h5 {
        font-weight: 700 !important;
      }
    }

    button {
      width: 80%;
      margin: 2rem;
      margin-top: 0;
    }
  }
`;

export const CheckoutItemContainer = styled.div`
  /* border: solid 1px #000; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  width: 100%;

  .cart-item__desc {
    /* border: solid 1px red; */
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h6 {
      /* border: solid 1px #000; */
      color: ${(props) => props.theme.black};
      font-weight: normal;
      font-size: 0.8rem;
      margin: 0;
      width: 100%;
      margin-bottom: 0.2rem;
      padding: 0;
      margin-left: 0 !important;
    }
    h4 {
      /* border: solid 1px #000; */
      color: ${(props) => props.theme.primary};
      font-weight: 700;
      font-size: 1.2rem;
      margin: 0;
      margin-top: 0.2rem;
      padding: 0;
    }
  }

  .cart-item__image {
    /* border: solid 2px #000; */
    display: flex;
    align-items: center;
    width: fit-content;
    max-height: 3.4rem;
  }
`;
