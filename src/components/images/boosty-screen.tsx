import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import CSS from 'csstype'

type Props = {
  style?: CSS.Properties;
}

const BoostyScreenImage: React.FC<Props> = ({ style = {} }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "boosty-screen.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    < Img
      alt="boostyのサービス画面"
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ maxWidth: '600px', ...style }}
    />
  )
}

export default BoostyScreenImage