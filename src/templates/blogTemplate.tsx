import { graphql } from "gatsby"
import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout/Layout"



function Template({ data }: any) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Helmet
                title={`Commonly - An article: ${frontmatter.title}`}
            />
            <div className="layout">
                <div className="row">
                    <div className="column mobile-0 tablet-2 desktop-3" />
                    <div className="column mobile-12 tablet-8 desktop-6">
                        <div className="container article">
                            <div className="article-details">
                                <div>
                                    <span className="publication-date">{frontmatter.date}</span>
                                </div>
                                <h1 className="header article-title">{frontmatter.title}</h1>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                    </div>
                    <div className="column mobile-0 tablet-2 desktop-3" />
                </div>
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`


export default Template
