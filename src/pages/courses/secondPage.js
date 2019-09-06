import React from 'react'
import { animated } from 'react-spring'

import { Header } from '../../components'

import { pageTransition } from '../../constants'

const SecondPage = ({ transitionStatus }) => {
  const transition = pageTransition(transitionStatus)

  return (
    <animated.div style={transition}>
      <div style={{ width: '100%', height: '100vh', background: 'lavender' }}>
        <Header from="/courses/start" to="/courses">
          <h1>Second Page</h1>
        </Header>
      </div>
    </animated.div>
  )
}

export default SecondPage
