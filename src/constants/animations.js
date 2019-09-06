import { config, useSpring } from 'react-spring'

export const pageTransition = (transitionStatus) => useSpring({
  config: config.slow,
  transform: ['exiting', 'exited'].includes(transitionStatus) ?
    'translate3d(-50%, 0, 0)' :
    'translate3d(0, 0, 0)',
  color: ['exiting', 'exited'].includes(transitionStatus) ? 'green' : 'purple',
  opacity: ['exiting', 'exited'].includes(transitionStatus) ? 0.5 : 1,
  from: { transform: 'translate3d(100%, 0, 0)', color: 'yellow', opacity: 0.5 }
})
