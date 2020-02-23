import React from "react"
import { Typography, Icon } from 'antd';
import CSS from 'csstype'
import PageLayout from "../components/layout/index"

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
        <div style={{ maxWidth: '900px', margin: '70px auto' }}>
            <Title level={1} style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>お問い合わせ</Title>
            <div style={{ textAlign: 'center' }}>
                <a href="https://twitter.com/tom__yam">
                    <div style={cardShadowStyle}>
                        <Icon type="twitter" style={{ verticalAlign: 'middle' }} />
                    </div>
                    <span style={{ fontWeight: 500, marginLeft: '8px' }}>TwitterのDMまでご連絡ください。</span>
                </a>
            </div>
        </div>
    </PageLayout>
)

export default ContactPage