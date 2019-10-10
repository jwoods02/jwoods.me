import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MastHead from "../components/masthead"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MastHead></MastHead>
  </Layout>
)

export default IndexPage
