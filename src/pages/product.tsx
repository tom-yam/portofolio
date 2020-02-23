import React from "react"
import { Typography, Icon } from 'antd';
import CSS from 'csstype'
import PageLayout from "../components/layout/index"
import ProductComponent from "../components/product";

const { Title } = Typography;
const cardShadowStyle: CSS.Properties = {
    width: '50px',
    height: '30px',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '2px 2px 4px #b4b8bf, -2px -2px 4px #ffffff',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '18px',
    color: '#2f54eb',
    display: 'inline-block'
}

const ContactPage = () => (
    <PageLayout backgroundColor="#f0f5ff">
        <ProductComponent />
    </PageLayout>
)

export default ContactPage