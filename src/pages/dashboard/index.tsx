import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './dash.css';
import { MenuSup } from "../../components/MenuSup";
import { User } from "../user";
import { Main } from "../main";
import { Layout, Menu } from "antd";
import { FileAddOutlined, RiseOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Content, Sider } = Layout;
export const Dashboard = () => {
    return (
        <Router>
            <MenuSup />
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
                    <SubMenu key="sub1" icon={<RiseOutlined />} title="Atividades">
                            <Menu.Item key="1">Entrada</Menu.Item>
                            <Menu.Item key="2">Saída</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<FileAddOutlined />} title="Relatórios">
                            <Menu.Item key="3">Gerais</Menu.Item>
                            <Menu.Item key="4">Individuais</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<SettingOutlined />} title="Cadastro">
                            <Menu.Item key="5">Novo Cliente</Menu.Item>
                            <Menu.Item key="6">Novo Fornecedor</Menu.Item>
                            <Menu.Item key="7">Nova Entrada</Menu.Item>
                            <Menu.Item key="8">Nova Saída</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="site-layout-background" style={{ padding: 24, margin: 0, minHeight: 280, }} >
                        <Switch>
                            <Route path="/dash/user" component={User} />
                            <Route path="/dash/main" component={Main} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );

}