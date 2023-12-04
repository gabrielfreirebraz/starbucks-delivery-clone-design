import styled, { css } from "styled-components";

export const CartContainer = styled.div<{ on?: 0 | 1 }>`
  position: fixed;
  right: 0;
  top: 0;
  width: 20.625rem;
  min-height: 100vh;
  z-index: 100;
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ${(props) => {
    return props.on === 1
      ? css`
          transform: translate(0, 0);
          transition: all 400ms ease-in;
        `
      : css`
          transform: translate(110%, 0);
          transition: all 400ms ease-out;
        `;
  }};

  h5 {
    color: ${(props) => props.theme.black};
    margin: 2rem 1.5rem;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;

    .iconCart {
      margin-left: 0.5rem;
    }
  }
  p {
    margin: 1.5rem;
  }
`;

export const CartItemContainer = styled.div`
  /* border: solid 1px #000; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;

  .cart-item__trashIcon {
    /* border: solid 3px #000; */
    display: flex;
    align-items: center;
    svg {
      font-size: 1.2rem;
      color: ${(props) => props.theme.black};
    }
  }
  .cart-item__desc {
    /* border: solid 1px #000; */
    min-width: 70%;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    /* justify-content: baseline; */

    h6 {
      color: ${(props) => props.theme.black};
      font-weight: normal;
      font-size: 0.8rem;
      margin: 0;
      margin-bottom: 0.2rem;
      padding: 0;
    }
    h4 {
      color: ${(props) => props.theme.primary};
      font-weight: 700;
      margin: 0;
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
