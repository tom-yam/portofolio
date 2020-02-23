import React from "react"
import PageLayout from "../components/layout/index"
import { graphql } from "gatsby"
import { AllArticlesQuery } from "../../types/graphql-types"
import { Typography } from 'antd'
import AllArticleList from '../components/article/list/all-list'

const { Title } = Typography;
type Props = {
  data: AllArticlesQuery
}

const ArticlesPage: React.FC<Props> = ({ data }) => (
  <PageLayout backgroundColor="#f0f5ff">
    <div style={{
      background: '#f0f5ff'
    }}>
      <div style={{ maxWidth: '900px', margin: "0px auto", padding: '20px' }} >
        <Title level={1} style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>記事一覧</Title>
        <AllArticleList data={data} />
      </div>
    </div>
  </PageLayout>
)

export const pageQuery = graphql`
  query AllArticles {
            allContentfulBlog(limit: 1000, sort: {fields: updatedAt, order: DESC}) {
            edges {
            node {
            title
          coverImage {
            title
            file {
            url
        }
        }
        updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          description {
            description
        }
        slug
      }
    }
  }
}
`

export default ArticlesPage