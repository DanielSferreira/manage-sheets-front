import * as React from "react";
import { useForm } from "react-hook-form";
import { Input, Radio, Button } from "antd";
import { Card, Col, Row } from 'antd';
import { label, align, input } from "../../Styles/labels";

const Form = () => {

	const {register, handleSubmit, errors} = useForm();
	const onSubmit = (data:any) => console.log(data);
	const [radioControl,setRadio] = React.useState();

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
		<Row gutter={16}>
			<Col span={8}>
				<Card>
					<span style={label.labelInputBlock}>Codigo Entrada</span>
					<input style={input.large} name="cod" ref={register} />
					{errors.num && <span>This field is required</span>}

					<Radio.Group
						style={align.margin15}
						onChange={(e)=>setRadio(e.target.value)}
						defaultValue={false}>

		        <Radio value={false} checked>Cliente Cadastrado</Radio>
		        <Radio value={true}>Outro tipo de Entrada</Radio>

		      </Radio.Group>
					{
						radioControl ?
							<>
								<Input style={input.large} name="novoClienteInp" type="text"  ref={register} />
								<Button style={align.margin15} type="dashed">Salvar</Button>
							</>
						:
						<select style={input.large} >
							<option value="0">Escolha uma das opções</option>
							<option value="1">Daniel</option>
							<option value="2">Lucy</option>
							<option value="3">Lucy</option>
						</select>
					}
				</Card>
			</Col>

			<Col span={16}>
				<Card>
				<span style={label.labelInputBlock}>Descrição da Entrada</span>
				<input style={input.large} name="descricaoEntrada" ref={register} />

				<Row gutter={16}>
					<Col span={12}>
					<span style={label.labelInputBlock}>Data Lançamento</span>
					<input type="date" style={input.large} required  name="DataLancamento"  ref={register}/>
					</Col>
					<Col span={12}>
					<span style={label.labelInputBlock}>Data a compensar</span>
					<input type="date" style={input.large} required  name="DataCompensar"  ref={register}/>
					</Col>
				</Row>

				<Row gutter={16}>
					<Col span={8}>
						<span style={label.labelInputBlock}>Tipo Pagamento</span>
						<select name="cars" ref={register} id="cars" style={input.large}>
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
export const NovaEntrada = () => <Form/>
