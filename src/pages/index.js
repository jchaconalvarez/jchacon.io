// Dependencies
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Title } from '../components/title/Title'

// Global Styles
import GlobalStyles from '../components/GlobalStyles'

const IndexPage = () => (
  <Layout>
    <SEO title="" keywords={['gatsby', 'application', 'react']} />
    <React.StrictMode>
      <Title title="test" />
    </React.StrictMode>
    <GlobalStyles />
  </Layout>
)

export default IndexPage
