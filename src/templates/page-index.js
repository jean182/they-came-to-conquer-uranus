import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.css"

const PageIndex = ({ data, location }) => {
  const title = data.site.siteMetadata.title
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
      <p>Now go build something great.</p>
    </Layout>
  )
}

export default PageIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
