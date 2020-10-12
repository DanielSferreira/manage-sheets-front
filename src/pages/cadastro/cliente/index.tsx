import * as React from "react";
import { useForm } from "react-hook-form";

import { Card, Col, Row, Button } from 'antd';
import { label, input } from "../../../Styles/labels";

export const Ncliente = () => {

	const {register, handleSubmit } = useForm();
	const onSubmit = (data:any) => console.log(data);

  const [radioCpf,setRadioCpf] = React.useState(true);

  const [telefoneInput,setTelefoneInput] = React.useState<string>("");
  const [telefoneLista,setTelefoneLista] = React.useState<string[]>([]);
  const [telefonesCadastrados,setTelefonesCadastrados] = React.useState<any[]>([]);

  const AdicionaTelefoneInput = () => setTelefoneLista([...telefoneLista,telefoneInput])

  React.useEffect(()=>{
		function remover (e:string) {
			console.log(e);
	    let arrTemp = telefoneLista.filter( (i) => i !== e );
	    setTelefoneLista(arrTemp);
	  }
    setTelefonesCadastrados(telefoneLista.map((element,key) =>
      <div key={key} style={{marginLeft:"15px",marginBottom:"05px"}}>
        <input value={element} onChange={()=>""}/>
        <Button type="link" onClick={()=>remover(element)}>Finalizar</Button>
      </div>
    ))
    console.log(telefoneLista);
  },[telefoneLista]);

  const [contatoInput,setContatoInput] = React.useState<string>("");
  const [contatoLista,setContatoLista] = React.useState<string[]>([]);
  const [contatosCadastrados,setContatosCadastrados] = React.useState<any[]>([]);

  const AdicionaContatoInput = () => setContatoLista([...contatoLista,contatoInput])

  React.useEffect(()=>{
		function remover (e:string) {
			console.log(e);
	    let arrTemp = contatoLista.filter( (i) => i !== e );
	    setContatoLista(arrTemp);
	  }
    setContatosCadastrados(contatoLista.map((element,key) =>
      <div key={key} style={{marginLeft:"15px",marginBottom:"05px"}}>
        <input value={element} onChange={()=>""}/>
        <Button type="link" onClick={()=>remover(element)}>Finalizar</Button>
      </div>
    ))
    console.log(contatoLista);
  },[contatoLista]);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Adicionando novo Cliente</h1>
      <Row gutter={16}>
        <Col span={16}>
          <Card>
            <span style={label.labelInputBlock}>Nome</span>
            <input type="text" style={input.large} required  name="nome"  ref={register}/>

            <Row>
              <Col span={12}>
                <span style={label.labelInputBlock}>Data de nascimento</span>
                <input type="date" style={input.large} required  name="nascimento"  ref={register}/>
              </Col>
              <Col span={12}>
                <Row style={{margin:"60px 30px 0"}}>
                  <Col span={12}><input type="radio" id="cpf" onClick={()=>setRadioCpf(true)} /><label htmlFor="cpf" style={{marginLeft:"15px"}}>Pessoa Física</label></Col>
                  <Col span={12}><input type="radio" id="cnpj" onClick={()=>setRadioCpf(false)} /><label htmlFor="cnpj" style={{marginLeft:"15px"}}>Pessoa Jurídica</label></Col>
                </Row>
              </Col>
            </Row>

            {
              radioCpf === true ?
                <>
                    <span style={label.labelInputBlock}>CPF</span>
                    <input type="tel" style={input.large} required  name="documento" pattern="\d{3}\.\d{3}\.\d{3}\-\d{2}$/" title="Digite um CPF no formato: xxx.xxx.xxx-xx" ref={register} />
                </>
              :
                <>
                  <span style={label.labelInputBlock}>CNPJ</span>
                  <input type="tel" style={input.large} required  name="documento" pattern="\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/" title="Digite um CNPJ no formato: xx.xxx.xxx.xxxx-xx" ref={register} />
                </>
            }

            <span style={label.labelInputBlock}>Endereço</span>
            <input type="text" style={input.large} required  name="endereco"  ref={register}/>

            <Row gutter={16}>
              <Col span={12}>
                <span style={label.labelInputBlock}>Contatos digitais<small>(e-mail, site, redes sociais)</small></span>
								{contatosCadastrados}
                <input type="text" name="eu" style={input.large} onChange={e=>setContatoInput(e.target.value)} ref={register}/>
								<input type="hidden" required name="contatos" onChange={(e)=>console.log(e.target.value)} defaultValue={contatoLista.join(";")} ref={register} />
                <Button type="dashed" style={input.add} name="eu" ref={register} onClick={()=>AdicionaContatoInput()}>Adicionar</Button>
              </Col>
              <Col span={12}>
                <span style={label.labelInputBlock}>Telefones</span>
                {telefonesCadastrados}

                <input type="tel"
                  style={input.large}
                  required
                  name="eu"
                  ref={register}
                  onChange={e=>setTelefoneInput(e.target.value)}
                />

                <input type="hidden"
                  required
                  name="telefones"
                  onChange={(e)=>console.log(e.target.value)}
                  defaultValue={telefoneLista.join(";")}
                  ref={register}
                />
                <Button type="dashed" style={input.add} ref={register} name="eu" onClick={()=>AdicionaTelefoneInput()}>Adicionar</Button>
              </Col>
            </Row>
              <Button type="primary" htmlType="submit">Finalizar</Button>
          </Card>
        </Col>
      </Row>
    </form>
  );
}
