import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'

import Layout from '../components/layout'

const PortfolioPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>
               <Head title="Portfolio"/>
            <h1>Portfolio</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}







export default PortfolioPage 