import React from 'react'

import {
  Center,
  Header,
  Title,
  Stack
} from '../../components'

const Courses = () => {
  return (
    <div>
      <Header />
      {/* <Title number="1" title="Main title" before="Week 1" main/> */}
      <Center>
        <Stack>
          <Title number="1" title="Introduction" before="Week 1" main />
          <Title number="2" title="HTML" main />
          <Title number="3" title="CSS" main />
          <Title number="4" title="Flexbox" before="Week 2" main />
          <Title number="5" title="Responsive Design" main />
          <Title number="6" title="Portfolio" main />
          <Title number="7" title="Portfolio" before="Week 3" main />
          <Title number="8" title="Portfolio" main />
          <Title number="9" title="Portfolio" main />
          <Title number="10" title="Portfolio Presentation" before="Week 4" main />
        </Stack>
      </Center>
    </div>
  )
}

export default Courses
