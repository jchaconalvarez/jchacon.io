import React from 'react'
import { animated } from 'react-spring'

import { Header } from '../../components'

import { pageTransition } from '../../constants'

const Courses = ({ transitionStatus }) => {
  const transition = pageTransition(transitionStatus)

  return (
    <animated.div style={transition}>
      <div style={{ width: '100%', height: '100vh', background: 'aliceblue' }}>
        <Header from="/courses/secondPage" to="/courses/start">
          <animated.h1>Courses</animated.h1>
        </Header>
      </div>
    </animated.div>
  )
}

export default Courses
