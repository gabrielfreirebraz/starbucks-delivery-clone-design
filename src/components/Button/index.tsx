import { ButtonContainer } from "./styles";


interface ButtonProps {
  classVariant?: string,
  outline?: boolean;
}


export const Button = ({ classVariant = 'primary', outline = false }: ButtonProps) => {

  return (

    <ButtonContainer className="btn" classVariant={classVariant} outline={outline} >
      My button
    </ButtonContainer>
  );
}