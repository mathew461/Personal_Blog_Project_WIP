import React from 'react'
import Layout from '../components/layout'

import { graphql } from "gatsby"
import Img from "gatsby-image"
import indexStyles from './index.module.scss'
import Head from '../components/head'

export const query = graphql`
  query {
    file(relativePath: { eq: "images/display_pic.jpg" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const indexPage = ({ data }) => {
  
return (
  <Layout >
      <Head />
      <Img
        className={indexStyles.display_pic}
        fixed={data.file.childImageSharp.fixed}
        alt="Display Picture">
      </Img>
        <h2 className={indexStyles.lower_heading}>About Me (1989)</h2>
        <p className={indexStyles.lower_p}>Some introductury bullshit goes here, some fluff that makes me sound good and appealing to some shit company.
       </p>
          
        <p className={indexStyles.lower_p}>Another paragraph bragging about myself and expressing how special and talanted I am.
        </p>
          
        <p className={indexStyles.lower_p}>Sell, sell fucking sell yourself.
        </p>
  </Layout>
  )
}




export default indexPage