import * as React from "react";
import { useForm } from "react-hook-form";
import { Card, Col, Row, Button } from 'antd';

import { label, input } from "../../../Styles/labels";

export const Nfornecedor = () => {

  const {register, handleSubmit } = useForm();
  const onSubmit = (data:any) => console.log(data);
  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Fornecedor - Cadastro</h1>
      <Row gutter={16}>
        <Col span={16}>
          <Card>
            <span style={label.labelInputBlock}>Nome</span>
            <input type="text" style={input.large} required  name="nome"  ref={register}/>
              <Button type="primary" htmlType="submit">Finalizar</Button>
          </Card>
        </Col>
      </Row>
    </form>
  );
}
