import React from 'react'

import { Center, Column, ExternalLink, Header, List, SectionTitle, Stack, Title } from '../../components'

const Responsive = () => (
  <div>
    <Header />
    <Title before="Week 3" number="1" title="CSS Animation" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this lesson we learned all about <b>CSS Pseudoclasses</b> like <b>hover</b>, <b>active</b>, and{' '}
            <b>focus</b>. We also saw how to animate things using <b>CSS Transitions</b> and <b>CSS Animations</b>.
          </p>
        </Center>
      </Stack>
      <Stack>
        <SectionTitle title="Resources" pullSize={2} />
        <Center>
          <List>
            <Stack>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">
                  MDN: CSS Animation
                </ExternalLink>
                <p>MDN Web Doc's page on CSS animations.</p>
              </li>
              <li>
                <ExternalLink href="https://cssfx.dev">CSSFX</ExternalLink>
                <p>Beautifully simple click-to-copy CSS effects.</p>
              </li>
              <li>
                <ExternalLink href="http://animista.net/">Animista</ExternalLink>
                <p>CSS Animations on demand.</p>
              </li>
              <li>
                <ExternalLink href="https://thoughtbot.com/blog/css-animation-for-beginners">
                  CSS Animation for beginners
                </ExternalLink>
                <p>CSS animation fundamentals, explained in a clear and concise way.</p>
              </li>
            </Stack>
          </List>
        </Center>
      </Stack>
    </Column>
  </div>
)

export default Responsive
