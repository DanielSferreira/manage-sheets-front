import * as React from "react";
import { Layout, Menu } from "antd";
import './menu.css';
import { Link } from "react-router-dom";
const { Header } = Layout;

export const MenuSup = ()=> {
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu className="menu" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/dash/main">Dashboard</Link></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}
