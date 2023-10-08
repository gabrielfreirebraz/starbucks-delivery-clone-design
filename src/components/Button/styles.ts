import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "seconday";

interface ButtonContainerProps {
  variant?: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: darkgreen;
  color: white;

  /* ${(props) => {
    return css`
      background: ${props.variant === "primary" && props.theme.primary};
    `;
  }}; */

  background: ${(props) => props.variant === "primary" && props.theme.primary};
`;
