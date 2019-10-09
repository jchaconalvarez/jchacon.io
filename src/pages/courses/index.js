import React from 'react'

import { Center, Header, List, LessonListItem, Stack } from '../../components'

const Courses = () => {
  return (
    <div>
      <Header />
      <Center maxWidth={33} padding={3}>
        <Stack recursive>
          <List marginTop>
            <LessonListItem before="Week 1" linkTo="/courses/introduction" number="1" text="Intro to HTML" />
            {/* <LessonListItem linkTo="/courses/html" number="2" text="HTML" />
            <LessonListItem linkTo="/courses/css" number="3" text="CSS" />
            <LessonListItem before="Week 2" linkTo="/courses/flexbox" number="4" text="Flexbox" /> */}
            {/* <LessonListItem linkTo="/courses/responsive" number="5" text="Responsive Design" /> */}
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
