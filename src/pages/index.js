import React from 'react'
import { Helmet } from 'react-helmet'

import { Layout, SEO } from '../components'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>jchacon.io</title>
      <link rel="canonical" href="https://www.jchacon.io" />
    </Helmet>
    <SEO
      title="jchacon.io"
      keywords={['portfolio', 'web development', 'javier chacon']}
    />
    <React.StrictMode>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontFamily: 'Ubuntu Mono' }}>jchacon.io</h1>
      </div>
    </React.StrictMode>
  </Layout>
)

export default IndexPage
