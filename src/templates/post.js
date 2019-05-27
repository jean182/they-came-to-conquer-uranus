import React from "react"
import Layout from "../components/layout"
import get from "lodash/get"
import { graphql } from "gatsby"

const PostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = get(data, "site.siteMetadata.title")
  return (
    <Layout location={location} title={siteTitle}>
      <h1>{post.frontmatter.title}</h1>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          minutes
        }
        slug
        langKey
      }
    }
  }
`
