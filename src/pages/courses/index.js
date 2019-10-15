import React from 'react'
import { Helmet } from 'react-helmet'

import { Center, Header, List, LessonListItem, Stack } from '../../components'

const Courses = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Courses</title>
        <link rel="canonical" href="https://www.jchacon.io" />
      </Helmet>
      <Header />
      <Center maxWidth={33} padding={3}>
        <Stack recursive>
          <List marginTop>
            <LessonListItem
              before="Week 1"
              linkTo="/courses/introduction"
              number="1"
              text="Intro to HTML"
            />
            <LessonListItem
              linkTo="/courses/introToCSS"
              number="2"
              text="Intro to CSS"
            />
            <LessonListItem
              linkTo="/courses/flexbox"
              number="3"
              text="Flexbox"
            />
            <LessonListItem
              before="Week 2"
              linkTo="/courses/responsive"
              number="4"
              text="Responsive Design"
            />
            {/* <LessonListItem
              linkTo="/courses/responsive"
              number="5"
              text="Responsive Design"
            /> */}
            {/* <LessonListItem linkTo="/courses/portfolio" number="6" text="Portfolio" /> */}
            {/* <LessonListItem before="Week 3" linkTo="/courses/portfolio" number="7" text="Portfolio" /> */}
            {/* <LessonListItem linkTo="/courses/portfolio" number="8" text="Portfolio" /> */}
            {/* <LessonListItem linkTo="/courses/portfolio" number="9" text="Portfolio" /> */}
            {/* <LessonListItem before="Week 4" linkTo="/courses/portfolio" number="10" text="Portfolio Presentation" /> */}
          </List>
        </Stack>
      </Center>
    </div>
  )
}

export default Courses
