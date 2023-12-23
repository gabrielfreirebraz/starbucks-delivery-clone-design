import { Col, Form, Row } from "react-bootstrap";
import { FormAddressContainer } from "./styles";
import { useContext } from "react";
import { CheckoutProvider } from "../../../contexts/defaultContext";


export const FormAddress = () => {
 
  const { register, formState: { errors } } = useContext(CheckoutProvider);
  
  return (
    <FormAddressContainer>
      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicCep">
            <Form.Control type="number" placeholder="CEP" {...register("cep", { required: true })} />
          </Form.Group>
        </Col>
        
        <Col md={8}>
          <Form.Group className="mb-3" controlId="formBasicRua">
            <Form.Control type="text" placeholder="Rua" {...register("rua", { required: true })} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicNumero">
            <Form.Control type="text" placeholder="Número" {...register("numero", { required: true })} />
          </Form.Group>
        </Col>
        
        <Col md={8}>
          <Form.Group className="mb-3" controlId="formBasicComplemento">
            <Form.Control type="text" placeholder="Complemento (Opcional)" {...register("complemento")} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicBairro">
            <Form.Control type="text" placeholder="Bairro" {...register("bairro", { required: true })} />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicCidade">
            <Form.Control type="text" placeholder="Cidade" {...register("cidade", { required: true })} />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicUF">
            <Form.Control type="text" placeholder="UF" {...register("uf", { required: true })} />
          </Form.Group>
        </Col>

        {errors?.cep && <span>O campo "Cep" é obrigatório</span>}
        {errors?.rua && <span>O campo "Rua" é obrigatório</span>}
        {errors?.numero && <span>O campo "Número" é obrigatório</span>}     
        {errors?.bairro && <span>O campo "Bairro" é obrigatório</span>}          
        {errors?.cidade && <span>O campo "Cidade" é obrigatório</span>}                  
        {errors?.uf && <span>O campo "UF" é obrigatório</span>}
      </Row>
    </FormAddressContainer>
  )
}