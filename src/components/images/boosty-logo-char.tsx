import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Img from "gatsby-image"
import CSS from 'csstype'

type Props = {
  style?: CSS.Properties;
}

const BoostyLogoCharImage: React.FC<Props> = ({ style = {} }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "boosty-logo-char.png" }) {
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
        style={{ maxWidth: '300px', ...style }}
      />
    </Link>
  )
}

export default BoostyLogoCharImage