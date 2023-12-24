import { Col, Form, Row } from "react-bootstrap";
import { FormAddressContainer } from "./styles";
import { useContext, useState } from "react";
import { CheckoutProvider } from "../../../contexts/defaultContext";
import axios from "axios";


export const FormAddress = () => {
 
  const { register, formState: { errors }, setValue } = useContext(CheckoutProvider);
  const [rua, setRua] = useState(null);
  const [bairro, setBairro] = useState(null);
  const [complemento, setComplemento] = useState(null);
  const [uf, setUF] = useState(null);
  const [cidade, setCidade] = useState(null);
  
  const handleCEP = async (cep: number) => {

    if (cep.toString().length >= 8) {
      const dataAddress = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      setBairro( dataAddress?.data.bairro ?? null );
      setComplemento( dataAddress?.data.complemento ?? null );
      setRua( dataAddress?.data.logradouro ?? null );
      setUF( dataAddress?.data.uf ?? null );
      setCidade( dataAddress?.data.localidade ?? null );
    }
  }

  return (
    <FormAddressContainer>
      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicCep">
            <Form.Control type="number" placeholder="CEP" {...register("cep", { required: true, onChange: (e: any) => handleCEP(e.target.value)  })} autoFocus />
          </Form.Group>
        </Col>
        
        <Col md={8}>
          <Form.Group className="mb-3" controlId="formBasicRua">
            <Form.Control type="text" placeholder="Rua" {...register("rua", { required: true, onChange: setValue("rua",rua) })} value={rua} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicNumero">
            <Form.Control type="text" placeholder="Número" {...register("numero", { required: true, })}  />
          </Form.Group>
        </Col>
        
        <Col md={8}>
          <Form.Group className="mb-3" controlId="formBasicComplemento">
            <Form.Control type="text" placeholder="Complemento (Opcional)" {...register("complemento", { onChange: setValue("complemento",complemento) })} value={complemento} />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicBairro">
            <Form.Control type="text" placeholder="Bairro" {...register("bairro", { required: true, onChange: setValue("bairro",bairro) })} value={bairro} />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicCidade">
            <Form.Control type="text" placeholder="Cidade" {...register("cidade", { required: true, onChange: setValue("cidade",cidade) })} value={cidade} />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicUF">
            <Form.Control type="text" placeholder="UF" {...register("uf", { required: true, onChange: setValue("uf",uf) })} value={uf} />
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