import React from 'react'

import { Landing, Layout, SEO } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={['portfolio', 'web development', 'javier chacon']} />
    <React.StrictMode>
      <Landing />
    </React.StrictMode>
  </Layout>
)

export default IndexPage
