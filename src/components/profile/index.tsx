import React from "react"
import { Typography } from 'antd';
import ProfileImage from "../images/profile";
import LinkItems from './items';

const { Paragraph } = Typography;

const cardShadowStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '8px 8px 16px #b4b8bf, -8px -8px 16px #ffffff',
    margin: '0 auto',
    padding: '20px'
}

const imageShadowStyle = {
    width: '65%',
    height: 'auto',
    borderRadius: '50%',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '6px 6px 12px #b4b8bf, -6px -6px 12px #ffffff',
    margin: '0 auto',
    overflow: 'hidden',
}

const ProfileComponent = () => {
    return (
        <div style={cardShadowStyle}>
            <div style={imageShadowStyle}>
                <ProfileImage style={{ border: '5px #f0f5ff solid', borderRadius: '50%' }} />
            </div>
            <Paragraph style={{ textAlign: 'center', fontSize: '18px', color: 'black', marginTop: '12px' }}>山下 智己</Paragraph>
            <LinkItems />
            <Paragraph style={{ fontSize: '14px', marginTop: '20px' }}>
                Yahoo! Japanにて約2年間エンジニアとして働いた後、「新しいことを学ぶ人を後押しできるサービスを作りたい」という想いから株式会社weverを設立。
            </Paragraph>
        </div>
    )
}

export default ProfileComponent