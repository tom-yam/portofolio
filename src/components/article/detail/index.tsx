import React from "react"
import { Typography, Icon } from 'antd'
import { ArticleContext } from "../../../../gatsby-node"

const { Title, Paragraph } = Typography;

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
    width: '100%',
    height: 'auto',
    borderRadius: '0.5rem',
    background: 'linear-gradient(145deg, #ffffff, #f0f5ff)',
    boxShadow: '6px 6px 12px #b4b8bf, -6px -6px 12px #ffffff',
    margin: '0 auto',
    overflow: 'hidden',
}

type Props = {
    pageContext: ArticleContext
}

const ArticleDetail: React.FC<Props> = ({ pageContext }) => (
    <div style={{ maxWidth: "800px", margin: 'auto', ...cardShadowStyle }}>
        <div style={imageShadowStyle}>
            <img
                alt={pageContext.article.coverImage.title}
                src={pageContext.article.coverImage.file.url}
                style={{ border: '5px #f0f5ff solid', width: '100%', height: 'auto', borderRadius: '1rem' }}
            />
        </div>
        <Title style={{ fontWeight: 400, fontSize: '28px', marginTop: '20px' }}>{pageContext.article.title}</Title>
        <Paragraph style={{ marginBottom: '40px' }}><Icon type="clock-circle" style={{ marginRight: '6px' }} />{pageContext.article.updatedAt}</Paragraph>
        <div dangerouslySetInnerHTML={{ __html: pageContext.article.body.childMarkdownRemark.html }} />
    </div>
)

export default ArticleDetail