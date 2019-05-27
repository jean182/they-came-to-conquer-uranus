import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import "../styles/main.css"

const PageIndex = ({ data, location, pageContext }) => {
  const title = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout title={title} location={location}>
      <SEO title="Home" />
      <h1>Balde 1</h1>
      <h2>Balde 2</h2>
      <h3>Balde 3</h3>
      <h4>Balde 4</h4>
      <h5>Balde 5</h5>
      <h6>Balde 6</h6>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
        }}
      >
        Welcome to your new Gatsby site.
      </p>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link className="article__link" to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small />
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default PageIndex

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            langKey
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          fields {
            readingTime {
              minutes
            }
          }
        }
      }
    }
  }
`
