import * as React from "react"
import { ArticleContext } from "../../../../gatsby-node"
import { Typography, Row, Col, Icon } from "antd"
import RelatedArticles from "./related"
import AllArticleItem from "../list/all-item";
const { Paragraph } = Typography;

type Props = {
    pageContext: ArticleContext
}

const RecomendList: React.FC<Props> = ({ pageContext }) => (
    <div style={{ marginTop: '30px' }}>
        {pageContext.article.relatedPosts &&
            <>
                <Paragraph style={{ fontSize: '18px', color: 'black', textAlign: 'center' }}>関連する記事</Paragraph>
                <RelatedArticles relatedPosts={pageContext.article.relatedPosts} />
            </>
        }
        <Row>
            {pageContext.previous &&
                <Col span={12}>
                    <Paragraph style={{ fontSize: '18px', color: 'black', textAlign: 'center' }}><Icon type="arrow-left" style={{ marginRight: '8px' }} />前の記事</Paragraph>
                    <AllArticleItem
                        title={pageContext.previous.title}
                        slug={pageContext.previous.slug}
                        description={pageContext.previous.description.description}
                        imagePath={pageContext.previous.coverImage.file.url}
                        updatedAt={pageContext.previous.updatedAt}
                    />
                </Col>
            }
            {pageContext.next &&
                <Col span={12}>
                    <Paragraph style={{ fontSize: '18px', color: 'black', textAlign: 'center' }}>次の記事<Icon type="arrow-right" style={{ marginLeft: '8px' }} /></Paragraph>
                    <AllArticleItem
                        title={pageContext.next.title}
                        slug={pageContext.next.slug}
                        description={pageContext.next.description.description}
                        imagePath={pageContext.next.coverImage.file.url}
                        updatedAt={pageContext.next.updatedAt}
                    />
                </Col>
            }
        </Row>
    </div>
)

export default RecomendList