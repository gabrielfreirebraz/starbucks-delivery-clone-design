import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary";

interface ButtonContainerProps {
  variant?: ButtonVariant;
  outline?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: ${(props) => props.theme.primary};
  color: white;
  border-radius: 15px;
  border: 0;
  padding: 0.3rem 1rem;
  margin-left: 0.5rem;
  min-width: fit-content;
  font-size: 0.95rem;
  font-weight: 500;

  /* ${(props) => {
    return css`
      background: ${props.variant === "primary" && props.theme.primary};
    `;
  }}; */

  background: ${(props) => props.variant === "primary" && props.theme.primary};
  background: ${(props) => props.variant === "secondary" && props.theme.black};
  background: ${(props) =>
    props.variant === "secondary" && props.outline && props.theme.white};
  color: ${(props) =>
    props.variant === "secondary" && props.outline && props.theme.black};
  border: solid 1px
    ${(props) =>
      props.variant === "secondary" && props.outline && props.theme.black};
`;
