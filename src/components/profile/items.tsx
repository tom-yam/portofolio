import React from "react"
import { Row, Col, Icon } from 'antd';
import CSS from 'csstype'

const cardShadowStyle: CSS.Properties = {
    width: '100%',
    height: '30px',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '2px 2px 4px #b4b8bf, -2px -2px 4px #ffffff',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '18px',
    color: '#2f54eb'
}

const items = [
    { link: "https://github.com/tom-yam", icon: "github" },
    { link: "https://twitter.com/tom__yam", icon: "twitter" },
    { link: "https://wever.co.jp/", icon: "global" }
]

const LinkItemsComponent = () => {
    return (
        <Row gutter={8}>
            {items.map(i => {
                return (
                    <Col key={i.icon} span={8}>
                        <a href={i.link}>
                            <div style={cardShadowStyle}>
                                <Icon type={i.icon} style={{ verticalAlign: 'middle' }} />
                            </div>
                        </a>
                    </Col>
                )
            })}
        </Row>
    )
}

export default LinkItemsComponent