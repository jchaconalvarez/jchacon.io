// Dependencies
import React, { useState } from 'react'
import PropTypes from 'prop-types';

// Styled Components
import {
  Wrapper
} from './redacted.style'

const Redacted = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Wrapper
      isVisible={ isVisible }
      onClick={ () => { setIsVisible(true) } }>
      { children }
    </Wrapper>
  )
}

Redacted.propTypes = {
  children: PropTypes.node.isRequired
}

export default Redacted;
