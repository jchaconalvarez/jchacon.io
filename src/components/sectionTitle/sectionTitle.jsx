import React from 'react'
import PropTypes from 'prop-types'

import { Container, Title } from './sectionTitle.style'

export const SectionTitle = ({ marginTop, maxWidth, pullSize, reverse, title }) => (
  <Container marginTop={marginTop} maxWidth={maxWidth} pullSize={pullSize} reverse={reverse}>
    <Title pullSize={pullSize} reverse={reverse}>
      {title}
    </Title>
  </Container>
)

SectionTitle.defaultProps = {
  marginTop: 0,
  maxWidth: '50%',
  pullSize: 0,
  reverse: false
}

SectionTitle.propTypes = {
  marginTop: PropTypes.number,
  maxWidth: PropTypes.string,
  pullSize: PropTypes.number,
  reverse: PropTypes.bool,
  title: PropTypes.string.isRequired
}
