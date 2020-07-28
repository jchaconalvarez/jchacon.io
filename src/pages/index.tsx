import React from 'react'

// Components
import { CVEntry, Hero } from '../components'

// Styles
import '../styles/index.scss'

// TODO: Move to Constants/Markdown
const CV = [
  {
    company: 'GoldenSpearLLC',
    date: '2019-Present',
    role: 'Frontend Dev',
    stack: [
      'ReactJS',
      'Redux',
      'Styled-Components',
      'Sass',
      'D3.js',
      'Storybook.js',
      'Scrum',
      'CI',
    ],
    summary:
      'Member of the Frontend team tasked with developing interfaces for multiple AI-driven data analytics and business intelligence platforms.',
  },
  {
    company: 'Ironhack',
    date: '2019/2020',
    role: 'Lead Teacher',
    stack: ['HTML', 'CSS', 'Teaching'],
    summary:
      'HTML and CSS teacher for UX/UI Bootcamp students for both in person and online courses. Responsibilities include the design and preparation of classes as well as providing feedback and correction to students.',
  },
  {
    company: 'Profile Software Services',
    date: '2019',
    role: 'Frontend Dev',
    stack: [
      'Angular2+',
      'AngularJS',
      'Sass',
      'Jasmine',
      'Scrum',
      'TDD',
      'CI',
      'CD',
    ],
    summary:
      'Part of multi-disciplinary team in charge of developing and maintaining complex Angular2+ web apps for large companies such as Sanitas, Avon, and RAC.',
  },
  {
    company: 'Ironhack',
    date: '2019',
    role: 'Assistant Teacher',
    stack: ['HTML', 'CSS', 'Teaching'],
    summary:
      'Assisted Lead Teacher by correcting student exercises and providing feedback to students.',
  },
]

const IndexPage: React.FC = () => {
  return (
    <>
      <Hero />
      <main className={'main'}>
        <div className={'container'}>
          {CV.map((cvEntry, index) => (
            <CVEntry key={index} {...cvEntry} />
          ))}
        </div>
      </main>
    </>
  )
}

export default IndexPage
