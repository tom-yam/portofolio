import React from "react"
import { Row, Col } from 'antd';

type Props = {
    left: React.ReactNode;
    right: React.ReactNode;
}

const TwoColumnLayout = ({ left = <></>, right = <></> }: Props) => {
    return (
        <div style={{
            background: '#f0f5ff'
        }}>
            <div style={{ maxWidth: '900px', margin: "0px auto", padding: '20px' }
            } >
                <Row type="flex" align="top" gutter={16}>
                    <Col xs={24} sm={24} md={17} lg={17} xl={17} >{left}</Col>
                    <Col xs={0} sm={0} md={7} lg={7} xl={7} >{right}</Col>
                </Row>
            </div >
        </div >
    )
}

export default TwoColumnLayout