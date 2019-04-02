import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/hero/hero'

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
  </Layout>
)

export default IndexPage
