import React from "react"
import { Link } from 'gatsby'
import { Row, Col, Icon } from 'antd';
import CSS from 'csstype'

const linkStyle: CSS.Properties = {
    fontSize: '16px',
    fontWeight: 500,
    color: '#2f54eb'
}

type LinkParam = {
    text: string;
    margin: string;
    linkPath: string;
}

const LinkItem: React.FC<LinkParam> = props => (
    <Link to={props.linkPath} style={{ marginLeft: props.margin, color: "#595959" }}>
        {props.text}
    </Link>
)

const items = [
    { name: '記事', margin: '0px', linkPath: '/articles' },
    { name: 'プロダクト', margin: '24px', linkPath: '/product' },
]

const MenuItems = () => {
    return (
        <Row style={linkStyle}>
            <Col xs={0} sm={0} md={24} lg={24} xl={24}>
                {items.map(i => (
                    <LinkItem text={i.name} margin={i.margin} linkPath={i.linkPath} key={i.name} />
                ))}
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Icon type="menu" />
            </Col>
        </Row>
    );
}

export default MenuItems