/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import './layout.css'

const AppContainer = styled.main`
  width: 100vw;
  height: 100vh;
`

export const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppContainer>
        {children}
      </AppContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
