import React from 'react'

/* Styles */
import '../styles/index.scss'

const IndexPage: React.FC = () => {
  return (
    <>
      <div className={'hero'}>
        <h1 className={'hero__name'}>Javier Chacón</h1>
        <h2 className={'hero__copy'}>
          <span className={'hero__position-old'}>English teacher turned</span>{' '}
          <span className={'hero__position-new'}>web developer.</span>
        </h2>
      </div>
      <main className={'main'}>
        <div className={'container'}>
          <article className={'cv-entry'}>
            <h4 className={'cv-entry__date'}>2019/Present</h4>
            <h3 className={'cv-entry__position'}>Lead teacher</h3>
            <h2 className={'cv-entry__place'}>Ironhack</h2>
            <ul className={'cv-entry__tech-list'}>
              <li className={'cv-entry__tags'}>React</li>
              <li className={'cv-entry__tags'}>Redux</li>
              <li className={'cv-entry__tags'}>Styled-Components</li>
              <li className={'cv-entry__tags'}>Sass</li>
              <li className={'cv-entry__tags'}>D3.js</li>
              <li className={'cv-entry__tags'}>Storybook</li>
              <li className={'cv-entry__tags'}>Scrum</li>
              <li className={'cv-entry__tags'}>CI</li>
            </ul>
            <p>
              Member of the Frontend team tasked with development interfaces for
              multiple AI-driven data analytics and business intelligence
              projects.
            </p>
          </article>
          <article className={'cv-entry'}></article>
          <article className={'cv-entry'}></article>
          <article className={'cv-entry'}></article>
        </div>
      </main>
    </>
  )
}

export default IndexPage
