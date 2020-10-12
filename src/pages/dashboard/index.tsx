import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FileAddOutlined, RiseOutlined, SettingOutlined } from '@ant-design/icons';

import { MenuSup } from "../../components/MenuSup";
import { User } from "../user";
import { Main } from "../main";
import { NovaEntrada } from "../novaEntrada";
import { NovaSaida } from "../novaSaida";

import { Ncliente } from "../cadastro/cliente";
import { Nfornecedor } from "../cadastro/fornecedor";
import { Nentrada } from "../cadastro/entrada";
import { Nsaida } from "../cadastro/saida";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export const Dashboard = () => {
    return (
        <Router>
            <MenuSup />
            <div style={{ display:"flex" }}>
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
                    <SubMenu key="sub1" icon={<RiseOutlined />} title="Atividades">
                            <Menu.Item key="1"><Link to="/dash/novaEntrada">Entrada</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/dash/novaSaida">Saída</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<FileAddOutlined />} title="Relatórios">
                            <Menu.Item key="3">Gerais</Menu.Item>
                            <Menu.Item key="4">Individuais</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<SettingOutlined />} title="Cadastro">
                            <Menu.Item key="5"><Link to="/dash/cadastro/cliente">Novo Cliente</Link></Menu.Item>
                            <Menu.Item key="6"><Link to="/dash/cadastro/fornecedor">Novo Fornecedor</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/dash/cadastro/entrada">Nova Entrada</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/dash/cadastro/saida">Nova Saída</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <>
                    <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, }} >
                        <Switch>
                            <Route path="/dash/main" component={Main} />
                            <Route path="/dash/user" component={User} />

                            <Route path="/dash/novaEntrada" component={NovaEntrada} />
                            <Route path="/dash/novaSaida" component={NovaSaida} />

                            <Route path="/dash/cadastro/cliente" component={Ncliente} />
                            <Route path="/dash/cadastro/fornecedor" component={Nfornecedor} />
                            <Route path="/dash/cadastro/entrada" component={Nentrada} />
                            <Route path="/dash/cadastro/saida" component={Nsaida} />
                        </Switch>
                    </Content>
                </>
            </div>
        </Router>
    );

}
