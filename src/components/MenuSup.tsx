import * as React from "react";
import { Layout, Menu } from "antd";
import { BookOutlined,ControlOutlined } from '@ant-design/icons';
import './menu.css';
import { Link } from "react-router-dom";
const { Header } = Layout;

export const MenuSup = () => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<BookOutlined />}><Link to="/dash/main">Dashboard</Link></Menu.Item>
                    <Menu.Item key="2" icon={<ControlOutlined/>}><Link to="/dash/user">Configurações</Link></Menu.Item>
                </Menu>
            </Header >
        </Layout >
    );
}
