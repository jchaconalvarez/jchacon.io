import React from 'react'

import { ExperienceElement, Layout, SEO } from '../components'

const Experience = () => (
  <Layout>
    <SEO title="Experience" />
    <h1>EXPERIENCE</h1>
    <ExperienceElement
      company={'GoldenSpear LLC'}
      description={
        'Member of the Frontend team tasked with developing interfaces for multiple AI-driven data analytics and business intelligence projects.'
      }
      companyWebsite={'http://www.goldenspear.com'}
      stack={[
        'React',
        'Redux',
        'Styled-Components',
        'Sass',
        'D3.js',
        'Storybook',
        'Scrum',
        'CI',
      ]}
      title={'Frontend developer'}
    />
    <ExperienceElement
      company={'Ironhack'}
      companyWebsite={'https://www.ironhack.com'}
      description={
        'HTML and CSS teacher for UX/UI Bootcamp students for both in person and online classes. Responsibilites include the design and preparation of classes as well as providing feedback and correction to students.'
      }
      stack={['HTML', 'CSS', 'Teaching']}
      title={'Lead teacher'}
    />
    <ExperienceElement
      company={'Profile Software Services'}
      companyWebsite={'https://www.profile.es'}
      description={
        'Part of multi-disciplinary team in charge of the development and maintenance of complex Angular 2+ web apps for large companies such as Sanitas, Avon, and RACE.'
      }
      stack={[
        'AngularJS',
        'Angular 2+',
        'Sass',
        'Jasmine',
        'Scrum',
        'TDD',
        'CI',
        'CD',
      ]}
      title={'Frontend Developer'}
    />
    <ExperienceElement
      company={'Ironhack'}
      companyWebsite={'https://www.ironhack.com'}
      description={
        'Assisted Lead Teacher by correcting student exercises and providing feedback to students.'
      }
      stack={['HTML', 'CSS', 'Teaching']}
      title={'Assistant Teacher'}
    />
  </Layout>
)

export default Experience
