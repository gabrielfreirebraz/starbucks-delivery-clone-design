import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | string;

interface ButtonContainerProps {
  classVariant?: ButtonVariant;
  outline?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  /* background: ${(props) => props.theme.primary}; */
  color: white;
  border-radius: 15px;
  padding: 0.3rem 1rem;
  margin-left: 0.5rem;
  min-width: fit-content;
  font-size: 0.95rem;
  font-weight: 500;
  transition: font-size 0.2s;

  &:hover {
    font-size: 0.85rem;
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.gray};
  }

  /* ${(props) => {
    return css`
      background: ${props.classVariant === "primary" && props.theme.primary};
    `;
  }}; */

  background: ${(props) =>
    props.classVariant === "primary" && props.theme.black};
  background: ${(props) =>
    props.classVariant === "secondary" && props.theme.black};
  background: ${(props) =>
    props.classVariant === "secondary" && props.outline && props.theme.white};
  color: ${(props) =>
    props.classVariant === "secondary" && props.outline && props.theme.black};
  border: solid 1px ${(props) => props.theme.black};
`;
