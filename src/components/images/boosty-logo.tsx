import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Img from "gatsby-image"
import CSS from 'csstype'

const BoostyLogoImage: React.FC<CSS.Properties> = style => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "boosty-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link to="/">
      < Img
        alt="サービスのロゴ"
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{ maxWidth: '300px', minWidth: '200px', ...style }}
      />
    </Link>
  )
}

export default BoostyLogoImage