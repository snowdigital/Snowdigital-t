import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Шаблон сайта</h1>
      <Image />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
