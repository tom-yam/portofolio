import React from "react"
import { Layout, Row, Col } from 'antd';
import MenuItems from './items'
import LogoImage from "../images/logo";

const { Header } = Layout;

const Menu = () => {
    return (
        <Header style={{ background: 'white', padding: '0px' }}>
            <div style={{ maxWidth: "900px", margin: 'auto', padding: '0 20px 0 20px', position: 'relative' }}>
                <Row align="middle" type="flex" gutter={16}>
                    <Col span={12}>
                        <LogoImage style={{ width: '140px' }} />
                    </Col>
                    <Col span={12} style={{ textAlign: 'right' }}>
                        <MenuItems />
                    </Col >
                </Row>
            </div>
        </Header>
    )
}
export default Menu