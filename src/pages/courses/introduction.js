import React from 'react'

import {
  Center,
  Column,
  Header,
  Row,
  SectionTitle,
  // Sidebar,
  Stack,
  Title
} from '../../components'

const Introduction = () => (
  <div>
    <Header />
    <Title before="Week 1" number="1" title="Introduction" main />
    <Row>
      <Column>
        <Center>
          <Stack>
            <SectionTitle title="Objective" pullSize={2} />
            <p>
              In this module we will be learning the basics of <strong>web markup</strong>
              (HTML & CSS) and applying them in the creation of our portfolio.
            </p>
          </Stack>
        </Center>
      </Column>
      <Column noTitle>
        <Center>
          <Stack>
            <p>
              The objective of this coding module is to learn the basics of <strong>web markup</strong> (HTML and CSS)
              and apply them in the creation of a simplified version of your portfolio as
              we probably won't have tools or time to exactly replicate the designs you worked on last week.
            </p>
          </Stack>
        </Center>
      </Column>
    </Row>
  </div>
)

export default Introduction
