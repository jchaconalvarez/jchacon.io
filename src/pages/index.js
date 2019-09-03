// Dependencies
import React from 'react'

import { Layout, SEO } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={[`portfolio`, `web development`, `javier chacon`]} />
    <React.StrictMode>
      <h1>YOWASSUP</h1>
    </React.StrictMode>
  </Layout>
)

export default IndexPage
