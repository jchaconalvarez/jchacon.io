import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

// Components
import { Header, Navbar, Sidebar } from '../'

// Styled Components
import theme from '../../theme'
import GlobalStyle from '../../theme/GlobalStyle'
import { AppWrapper, Content, Main, Refresh, Screen } from './layout.styles'

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Refresh />
        <Screen>
          <Header>JCH-OS</Header>
          <Content>
            {/* <Sidebar>
              <Link to={'/'}>HOME</Link>
              <Link to={'/page2'}>PAGE2</Link>
            </Sidebar> */}
            <Main>{children}</Main>
          </Content>
          <Navbar />
        </Screen>
      </AppWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
