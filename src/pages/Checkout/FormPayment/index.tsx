import { ButtonContainer } from "../../../components/Button/styles";
import { FormPaymentContainer } from "./styles";



export const FormPayment = () => {

  return (
    <FormPaymentContainer>

      <div className="block">
        <ButtonContainer variant="default">Cartão de crédito</ButtonContainer>
        <ButtonContainer variant="default">Cartão de débito</ButtonContainer>
        <ButtonContainer variant="default">Dinheiro</ButtonContainer>
      </div>
      
    </FormPaymentContainer>
  );
}