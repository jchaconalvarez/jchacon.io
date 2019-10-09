import React from 'react'

import { Layout, SEO } from '../components'

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={['portfolio', 'web development', 'javier chacon']} />
    <React.StrictMode>
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'Ubuntu Mono' }}>jchacon.io</h1>
      </div>
    </React.StrictMode>
  </Layout>
)

export default IndexPage
