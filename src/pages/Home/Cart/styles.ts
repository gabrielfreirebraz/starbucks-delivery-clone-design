import styled, { css } from "styled-components";

export const CartContainer = styled.div<{ on?: 0 | 1 }>`
  position: fixed;
  right: 0;
  top: 6rem;
  width: 20.625rem;
  min-height: 100vh;
  z-index: 100;
  background: ${(props) => props.theme.white};
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
`;
