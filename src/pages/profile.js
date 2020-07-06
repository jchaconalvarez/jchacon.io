import React from 'react'

// Components
import { Layout, List, SEO } from '../components'

// Images
import scotland from '../images/scotland.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Profile" />
      <h1>PROFILE</h1>
      <div
        style={{
          padding: '1rem',
          border: '1px solid green',
        }}
      >
        <img
          src={scotland}
          alt={'Profile'}
          style={{
            filter: 'sepia(1) saturate(250%) hue-rotate(90deg)',
            objectFit: 'cover',
          }}
        />
      </div>
      <List />
      <p>
        English teacher turned web developer. Tech nerd with a knack for problem
        solving.
      </p>
    </Layout>
  )
}

export default IndexPage
