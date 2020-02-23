import React from "react"
import { Row, Col, Typography } from 'antd';
import BoostyScreenImage from "../images/boosty-screen";
import BoostyLogoCharImage from "../images/boosty-logo-char";

const { Title, Paragraph } = Typography;

const logoShadowStyle = {
    width: '50%',
    padding: '20px',
    height: 'auto',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '8px 8px 16px #b4b8bf, -8px -8px 16px #ffffff',
    margin: '0 auto',
    display: 'inline-block',
}

const ProductComponent = () => (
    <div style={{
        backgroundColor: '#f0f5ff',
    }}>
        <div style={{ maxWidth: "900px", margin: 'auto', padding: '50px', position: 'relative', textAlign: 'center' }}>
            <Title level={2}>プロダクト</Title>
            <Row type="flex" align="middle" gutter={32}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '40px' }}>
                    <BoostyScreenImage />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{ marginTop: '40px' }}>
                    <div style={logoShadowStyle}>
                        <a href="https://boosty.jp">
                            <BoostyLogoCharImage />
                        </a>
                    </div>
                    <Paragraph style={{ fontSize: '18px', color: 'black', marginTop: '24px', marginBottom: '12px', fontWeight: 500 }}>オンライン技術書サービス</Paragraph>
                    <Paragraph style={{ fontSize: '14px', textAlign: 'left' }}>boostyはブラウザ上で技術書を書いて販売できるサービスです。動画やコードスニペットなどWeb上で学べるからこそのコンテンツ性を売りにしています。
                    <a href="https://boosty.jp">詳細を見る</a>
                    </Paragraph>
                </Col>
            </Row>
        </div>
    </div>
)

export default ProductComponent