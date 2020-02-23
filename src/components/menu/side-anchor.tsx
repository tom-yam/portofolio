import React from "react"
import { Row, Col } from 'antd';

const cardStyle = {
    backgroundColor: 'white',
    boxShadow: '0 4px 11px 0 rgba(37,44,97,.15), 0 1px 3px 0 rgba(93,100,148,.2)',
    borderRadius: '2rem',
    width: '100%',
    height: '100%',
    padding: '20px',
    fontColor: 'black',
    marginLeft: 'auto',
    maxWidth: '300px',
}

type Props = {
    title: string;
    slug: string;
}

const SideAnchorMenu: React.FC<Props> = props => (
    <Row>
        <Col xs={0} sm={0} md={0} lg={0} xl={24} xxl={24}>
            <div style={{ position: "fixed", left: '0px', padding: '60px 0px 0px 20px', width: 'calc((100% - 800px) / 2)' }}>
                <div style={cardStyle}>
                </div>
            </div>
        </Col>
    </Row>
)

export default SideAnchorMenu;