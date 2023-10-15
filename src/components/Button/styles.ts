import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "default" | string;

interface ButtonContainerProps {
  variant?: ButtonVariant;
  outline?: boolean | string;
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

  ${(props) => {
    return props.variant !== "default"
      ? css`
          transition: font-size 0.2s;

          &:hover {
            font-size: 0.85rem;
            box-shadow: 1px 1px 1px 1px ${(props) => props.theme.gray};
          }
        `
      : css`
          transition: background 0.2s;
          border: solid 1px ${(props) => props.theme.default};

          &:hover {
            background: ${(props) => props.theme.white};
            color: ${(props) => props.theme.default};
          }
        `;
  }}

  /* ${(props) => {
    return css`
      background: ${props.variant === "primary" && props.theme.primary};
    `;
  }}; */

  background: ${(props) => props.variant === "primary" && props.theme.black};
  background: ${(props) => props.variant === "secondary" && props.theme.black};
  background: ${(props) => props.variant === "default" && props.theme.default};
  background: ${(props) =>
    props.variant === "secondary" && !!props.outline && props.theme.white};
  color: ${(props) =>
    props.variant === "secondary" && !!props.outline && props.theme.black};
  border: solid 1px
    ${(props) => props.variant !== "default" && props.theme.black};
`;
