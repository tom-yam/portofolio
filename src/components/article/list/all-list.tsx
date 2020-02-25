import React from "react"
import AllArticleItem from "./all-item";
import { Row, Col } from 'antd';
import { RecentArticlesQuery } from "../../../../types/graphql-types"

type Props = {
    data: RecentArticlesQuery
}

const AllArticleList: React.FC<Props> = ({ data }) => {
    return (
        <Row type="flex" gutter={16} >
            {data.allContentfulBlog.edges.map(page =>
                <Col xs={12} sm={8} md={8} lg={8} xl={8} key={page.node.slug} style={{ marginBottom: '20px' }}>
                    <AllArticleItem
                        title={page.node.title}
                        slug={page.node.slug}
                        description={page.node.description.description}
                        imagePath={page.node.coverImage.file.url}
                        updatedAt={page.node.updatedAt}
                    />
                </Col>
            )}
        </Row>
    )
}

export default AllArticleList;