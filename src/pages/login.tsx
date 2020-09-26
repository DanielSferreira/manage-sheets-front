import * as React from 'react';
import { Typography, Input } from 'antd';
import './login.css';

export const Login: React.FunctionComponent = () => {
	const { Title } = Typography;

	const [loginT, SloginT] = React.useState("");
	const [passT, SpassT] = React.useState("");
	return (
		<div className="container-login">
			<Title level={2}>Login <small>{loginT} - {passT}</small></Title>
			<Input  size="large" type="text"  onChange={e=> SloginT(e.target.value)}/>
			<Input  size="large" type="text"  onChange={e=> SpassT(e.target.value)}/>
		</div>
	);
};
