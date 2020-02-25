const path = require("path")
import { GatsbyNode } from "gatsby"
import { ContentfulBlogConnection, ContentfulBlog } from "../types/graphql-types"

type Result = {
  allContentfulBlog: ContentfulBlogConnection
}

export type ArticleContext = {
  article: ContentfulBlog,
  previous?: ContentfulBlog,
  next?: ContentfulBlog,
}

export const articleQuery = `
{
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
        tags
        description {
          description
        }
        slug
        body {
          body
          childMarkdownRemark {
            html
            headings {
              value
              depth
            }
          }
        }
        relatedPosts {
          title
          slug
          updatedAt(locale: "ja-JP", formatString: "YYYY年MM月DD日")
          coverImage {
            title
            file {
              url
            }
          }
          description {
            description
          }
        }
      }
      previous {
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
      next {
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
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql<Result>(articleQuery)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { edges } = result.data.allContentfulBlog

  edges.forEach(edge => {
    createPage<ArticleContext>({
      path: `/article/${edge.node.slug}/`,
      component: path.resolve("./src/templates/article.tsx"),
      context: { article: edge.node, next: edge.next, previous: edge.previous }
    })
  });
}