import React from "react"
import { Typography } from 'antd';
import BoostyLogoCharImage from "../../images/boosty-logo-char";

const { Paragraph } = Typography;

const logoShadowStyle = {
    // width: '50%',
    padding: '20px',
    height: 'auto',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '8px 8px 16px #b4b8bf, -8px -8px 16px #ffffff',
    margin: '0 auto',
    display: 'inline-block',
}

const cardShadowStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '8px 8px 16px #b4b8bf, -8px -8px 16px #ffffff',
    margin: '0 auto',
    padding: '20px'
}

const ProductAd = () => (
    <div style={{ maxWidth: "400px", margin: 'auto', textAlign: 'center', ...cardShadowStyle }}>
        <a href="https://boosty.jp">
            <div style={logoShadowStyle}>
                <BoostyLogoCharImage style={{ width: '120px' }} />
            </div>
            <Paragraph style={{ fontSize: '17px', color: 'black', marginTop: '24px', marginBottom: '12px', fontWeight: 500 }}>技術書プラットフォーム</Paragraph>
            <Paragraph style={{ fontSize: '14px', textAlign: 'left' }}>技術情報をもっと体系的に手軽に学びたいという想いから作りました。ぜひ<a href="https://boosty.jp">チェック</a>してください！</Paragraph>
        </a>
    </div>
)

export default ProductAd