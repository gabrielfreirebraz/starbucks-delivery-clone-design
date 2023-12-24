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
// console.log(radios.filter(radio => radio.value === radioValue)[0].name )

const pay = watch("pagamento");
console.log(pay)

  return (
    <FormPaymentContainer>

      <div className="block">
        
        <ButtonGroup>
          {radios.map((radio, idx) => (

            <Controller
              control={control}
              name="pagamento"
              // defaultValue={null}
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
                  variant={'outline-success'}
                  value={radio.value}
                  // checked
                  // checked={fieldState.isTouched}
                  // checked={radioValue === radio.value}
                  // onChange={(e) => setRadioValue(e.currentTarget.value)}
                  // onChange={field.onChange}
                  // onClick={(e) => setRadioValue(e.currentTarget.value)}
                  // onClick={(e) => console.log(fieldState.isTouched)}
                >
                  {radio.name}
                </ToggleButton>
              )}
            />
          ))}
        </ButtonGroup>
        {/* <ButtonContainer variant="default" {...register("cartao-credito")}>Cartão de crédito</ButtonContainer>
        <ButtonContainer variant="default" {...register("cartao-debito")}>Cartão de débito</ButtonContainer>
        <ButtonContainer variant="default" {...register("dinheiro")}>Dinheiro</ButtonContainer> */}
      </div>
      
    </FormPaymentContainer>
  );
}