import { ButtonContainer, ButtonVariant } from "./styles";


interface ButtonProps {
  variant?: ButtonVariant,
  outline?: boolean | string;
}


export const Button = ({ variant = 'primary', outline = 'false' }: ButtonProps) => {

  return (

    <ButtonContainer className="btn" variant={variant} outline={outline} >
      My button
    </ButtonContainer>
  );
}