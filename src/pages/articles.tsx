import React, { useEffect } from "react"
import Layout from "../components/Layout/Layout"
import {graphql, Link} from "gatsby"

const PostLink = ({ post }: any) => {
    console.log(post)
    return (
        <div className="card">
            <div className="header">
                <div className="misc">
                    <span>{post.frontmatter.date}</span>
                    {/*<span>Level: {post.frontmatter.level}</span>*/}
                </div>
                <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                </Link>
            </div>
            <small className="content">
                {post.excerpt}
            </small>
        </div>
    )
}

export default ({ data: { allMarkdownRemark: { edges } } }: any) => {
    return (
        <Layout>
            <div className="layout">
                <div className="row">
                    <div className="column mobile-2">
                    </div>
                    <div className="column">
                        <div className="container">
                            <h1>Articles</h1>
                            <ul>
                                {edges.map((edge: any) =>
                                    <li key={edge.node.id}>
                                        <PostLink post={edge.node} />
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="column mobile-2">
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            level
          }
        }
      }
    }
  }
`