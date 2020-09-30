import * as React from "react";
import { Layout, Row, Col, Typography, Input } from "antd";
import { BookOutlined,ControlOutlined } from '@ant-design/icons';
// import './menu.css';
import { Link } from "react-router-dom";
const { Title } = Typography;

export const FormBase = () => {
    return (
        <Layout>
  				<Title level={2}>Login</Title>
          <Row gutter={[8, 8]}>
            <Col span={8}>
    				<Input className="input-login" placeholder="Usuario" />

            </Col>
            <Col span={8}></Col>
          </Row>
        </Layout >
    );
}
