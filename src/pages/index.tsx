import React from "react"
import PageLayout from "../components/layout/index"
import ProductComponent from '../components/product'
import TwoColumnLayout from '../components/layout/two-column'
import ProfileComponent from "../components/profile"
import HomeArticleList from "../components/article/list/home-list"
import { graphql } from "gatsby"
import { RecentArticlesQuery } from "../../types/graphql-types"
import SEO from "../components/seo"

type Props = {
  data: RecentArticlesQuery
}

const IndexPage: React.FC<Props> = ({ data }) => (
  <PageLayout>
    <SEO title="tom-yam" meta={[]} />
    <ProductComponent />
    <TwoColumnLayout
      left={
        <>
          <HomeArticleList data={data} />
        </>
      }
      right={<ProfileComponent />}
    />
  </PageLayout>
)

export const pageQuery = graphql`
  query RecentArticles {
    allContentfulBlog(limit: 10, sort: {fields: updatedAt, order: DESC}) {
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

export default IndexPage