import * as React from "react";
import { Button, Layout, Typography, Input } from "antd";
import './login.css';

const { Title } = Typography;

export const Login = () => {
	return (
		<Layout  className="login">
			<div className="item-login">
				<Title level={2}>Login</Title>
				<Input className="input-login" placeholder="Usuario" />
				<Input className="input-login" placeholder="Senha" type="password" />
				<div className="input-group-buttom">
					<Button>Entrar</Button>
					<Button type="text">Redefinir a senha</Button>
				</div>
			</div>
		</Layout>
	);
}