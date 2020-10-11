import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { Card, Col, Row } from 'antd';
import { label, input } from "../../Styles/labels";
import { dt } from "./date";
const Form = () => {

	const {register, handleSubmit} = useForm();
	const onSubmit = (data:any) => console.log(data);

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
		<Row gutter={16}>
			<Col span={8}>
				<Card>
					<span style={label.labelInputBlock}>Codigo Saida</span>
					<input style={input.large} required  name="cod" ref={register}/>
          <span style={label.labelInputBlock}>Associar sáida à um funcionário?</span>
					<select name="func_associado" ref={register} style={input.large} >
						<option value="0">Não</option>
						<option value="1">Daniel</option>
						<option value="2">Lucy</option>
						<option value="3">Lucy</option>
					</select>

				</Card>
			</Col>

			<Col span={16}>
				<Card>
				<Row gutter={16}>
					<Col span={8}>
					<span style={label.labelInputBlock}>Tipo de Saída</span>
					<select name="tipoSaida" ref={register} style={input.large}  >
						<option value="0">Escolha uma das opções</option>
						<option value="1">Daniel</option>
						<option value="2">Lucy</option>
						<option value="3">Lucy</option>
					</select>
					</Col>
					<Col span={8}>
						<span style={label.labelInputBlock}>Data</span>
						<input type="text" defaultValue={ dt.data } style={input.large} required  name="data" ref={register}/>
					</Col>
					<Col span={8}>
						<span style={label.labelInputBlock}>Hora</span>
						<input type="text" defaultValue={dt.hora} style={input.large} required  name="hora" ref={register}/>
					</Col>
				</Row>

				<span style={label.labelInputBlock}>Descrição da Saída</span>
				<input style={input.large} required name="descricao_saida" ref={register} />

				<Row gutter={16}>
					<Col span={8}>
						<span style={label.labelInputBlock}>Tipo Pagamento</span>
						<select name="tipo_pagamento" ref={register}  style={input.large}>
						  <option value="vista">À Vista</option>
						  <option value="debito">Débito</option>
						  <option value="credito">Crédito</option>
						  <option value="outro">Outro</option>
						</select>
					</Col>
					<Col span={8}>
						<span style={label.labelInputBlock}>Valor</span>
						<input type="text" style={input.large} required  name="Valor"  ref={register}/>
					</Col>
					<Col span={8}>
						<span style={label.labelInputBlock}>Obs</span>
						<input type="text" style={input.large} required  name="Obs"  ref={register}/>
					</Col>
				</Row>
				<div style={{textAlign:"right", margin:"20px 0"}}>
					<Button type="primary" htmlType="submit">Salvar</Button>
				</div>
				</Card>
			</Col>

		</Row>
		</form>
	)

}
export const NovaSaida = () => <Form />
