import React from 'react'
import { animated } from 'react-spring'

import { Header } from '../../components'

import { pageTransition } from '../../constants'

const Start = ({ transitionStatus }) => {
  const transition = pageTransition(transitionStatus)

  return (
    <animated.div style={transition}>
      <div style={{ width: '100%', height: '100vh', background: 'papayawhip' }}>
        <Header from="/courses" to="/courses/secondPage">
          <h1>Introduction</h1>
        </Header>
      </div>
    </animated.div>
  )
}

export default Start
