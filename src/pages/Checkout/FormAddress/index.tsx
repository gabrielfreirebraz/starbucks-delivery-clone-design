import { Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FormAddressContainer } from "./styles";


export default function FormAddress() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  // type InputsAddress = {
  //   cep: number,
  //   rua: string,
  //   numero: number,
  //   complemento: string,
  //   bairro: string,
  //   cidade: string,
  //   uf: string
  // }
  const onSubmit = (data: any): void => console.log(data)

  // console.log(watch("example")) // watch input value by passing the name of it

  return (
    <FormAddressContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          
          {errors.cep && <span>O campo "Cep" é obrigatório</span>}
          {errors.rua && <span>O campo "Rua" é obrigatório</span>}
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
          
          {errors.numero && <span>O campo "Número" é obrigatório</span>}          
        </Row>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicBairro">
              <Form.Control type="text" placeholder="Bairro" {...register("bairro", { required: true })} />
            </Form.Group>
          </Col>
          
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicCidade">

              <Form.Control type="text" placeholder="Cidade" {...register("cidade")} />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Form.Group className="mb-3" controlId="formBasicUF">

              <Form.Control type="text" placeholder="UF" {...register("uf")} />
            </Form.Group>
          </Col>
          
          {errors.cidade && <span>O campo "Cidade" é obrigatório</span>}
          {errors.uf && <span>O campo "UF" é obrigatório</span>}
        </Row>
      </Form>
    </FormAddressContainer>
  )
}