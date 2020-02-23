import React from "react"
import { Typography, Row, Col } from 'antd';
import { createArticleLink } from '../../../utils/link-generator'
import { Link } from 'gatsby'

const { Paragraph } = Typography;

const cardShadowStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '1rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '10px 10px 20px #b4b8bf, -10px -10px 20px #ffffff',
    margin: '0 auto',
    padding: '16px',
    marginBottom: '20px'
}

type Props = {
    title: string;
    slug: string;
    description: string;
    imageTitle?: string;
    imagePath: string;
    updatedAt: string;
}
const HomeArticleItem: React.FC<Props> = props => {

    return (
        <Link to={createArticleLink(props.slug)}>
            <div style={cardShadowStyle}>
                <Row gutter={8}>
                    <Col span={9}>
                        <img
                            alt="記事のヘッダー画像"
                            src={props.imagePath}
                            style={{ maxWidth: '300px', width: '100%', height: 'auto', border: '2px #f0f5ff solid', borderRadius: '1rem' }}
                        />
                    </Col>
                    <Col span={15}>
                        <Paragraph
                            ellipsis={{ rows: 1, expandable: false, }}
                            style={{ fontSize: '18px', color: 'black', fontWeight: 500, marginBottom: '8px' }}
                        >
                            {props.title}
                        </Paragraph>
                        <Paragraph
                            ellipsis={{ rows: 3, expandable: false, }}
                            style={{ marginBottom: '8px' }}
                        >
                            {props.description}
                        </Paragraph>
                        <Paragraph
                            ellipsis={{ rows: 1, expandable: false, }}
                            style={{ fontSize: '12px', marginBottom: '0px', textAlign: 'right' }}
                        >
                            {props.updatedAt}
                        </Paragraph>
                    </Col >
                </Row>
            </div>
        </Link>
    )
}

export default HomeArticleItem