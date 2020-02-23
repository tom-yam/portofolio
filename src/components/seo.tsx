import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import OGP_IMAGE from '../images/ogp.png'

type Props = {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
}

const SEO: React.FC<Props> = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = props.description || site.siteMetadata.description
  const lang = props.lang || 'ja-jp'

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={props.title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: ["tom-yam", "エンジニア", "ブログ"],
        },
        {
          property: `og:url`,
          content: "https://tomokiya.com",
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: "https://tomokiya.com" + OGP_IMAGE,
        },
        {
          property: `og:image:alt`,
          content: `サービスのロゴ`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: `tom-yam`,
        },
        {
          property: `og:locale`,
          content: `ja_JP`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: "https://tomokiya.com" + OGP_IMAGE,
        },
        {
          name: `twitter:image:alt`,
          content: 'サービスのロゴ'
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:site`,
          content: `@tom__yam`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(props.meta)}
    />
  )
}

export default SEO
