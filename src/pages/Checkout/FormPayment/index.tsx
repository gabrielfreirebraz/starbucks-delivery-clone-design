import { useContext } from "react";
import { FormPaymentContainer } from "./styles";
import { CheckoutProvider } from "../../../contexts/defaultContext";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { Controller } from "react-hook-form";



export const FormPayment = () => {

  const { watch, control } = useContext(CheckoutProvider);

  const radios = [
    { name: 'Cartão de crédito', value: 'Cartão de crédito' },
    { name: 'Cartão de débito', value: 'Cartão de débito' },
    { name: 'Dinheiro', value: 'Dinheiro' },
  ];

  const payTypeSelected = watch("pagamento");

  return (
    <FormPaymentContainer>

      <div className="block">
        
        <ButtonGroup>
          {radios.map((radio, idx) => (

            <Controller
              control={control}
              name="pagamento"              
              key={idx}  
              render={({
                field
                // field: { onChange, onBlur, value, name, ref },
                // fieldState: { invalid, isTouched, isDirty, error },
                // formState,
              }) => (
                // <Checkbox
                //   onBlur={onBlur} // notify when input is touched
                //   onChange={onChange} // send value to hook form
                //   checked={value}
                //   inputRef={ref}
                // />
                <ToggleButton
                  {...field}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={`outline-success `+ (radio.value === payTypeSelected && 'active')}
                  value={radio.value}
                >
                  {radio.name}
                </ToggleButton>
              )}
            />
          ))}
        </ButtonGroup>
      </div>
      
    </FormPaymentContainer>
  );
}