import React from 'react'

// Styles
import './hero.scss'

export const Hero: React.FC = () => {
  return (
    <div className={'hero'}>
      <div className={'container'}>
        <div className={'hero__copy'}>
          <h1 className={'hero__name'}>Javier Chacón</h1>
          <h2>
            <span className={'hero__role-old'}>English teacher</span> turned{' '}
            <span className={'hero__role-new'}>web developer.</span>
          </h2>
          <h2 className={'outlined-font hidden'}>
            Tech nerd with a knack for problem solving
          </h2>
        </div>
      </div>
    </div>
  )
}
