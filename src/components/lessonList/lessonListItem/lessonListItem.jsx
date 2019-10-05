import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import { Container, Text } from './lessonListItem.style'

export const LessonListItem = ({ before, linkTo, number, text }) => (
  <li>
    <Link to={linkTo}>
      <Container before={before}>
        <Text number={number}>{text}</Text>
      </Container>
    </Link>
  </li>
)

LessonListItem.defaultProps = {
  before: null,
  linkTo: '#',
  number: null,
  text: null
}

LessonListItem.propTypes = {
  before: PropTypes.string,
  linkTo: PropTypes.string,
  number: PropTypes.string,
  text: PropTypes.string
}
