import React from 'react'

import {
  Center,
  Column,
  ExternalLink,
  Header,
  List,
  SectionTitle,
  Stack,
  Title,
} from '../../components'

const Responsive = () => (
  <div>
    <Header />
    <Title before="Week 2" number="1" title="Responsive Design" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this lesson we reviewed some <b>flexbox</b> and learned how to
            use <b>media queries</b> to create responsive layouts.
          </p>
        </Center>
      </Stack>
      <Stack>
        <SectionTitle title="Resources" pullSize={2} />
        <Center>
          <List>
            <Stack>
              <li>
                <ExternalLink href="https://developers.google.com/web/fundamentals/design-and-ux/responsive">
                  Google: Responsive Web Design Basics
                </ExternalLink>
                <p>Google's reponsive design best practices</p>
              </li>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">
                  MDN: Using Media Queries
                </ExternalLink>
                <p>MDN Web Doc's page on media queries.</p>
              </li>
              <li>
                <ExternalLink href="https://www.toptal.com/designers/responsive/responsive-design-best-practices">
                  Responsive Design Best Practices
                </ExternalLink>
                <p>General tips on Responsive design best practices.</p>
              </li>
            </Stack>
          </List>
        </Center>
      </Stack>
    </Column>
  </div>
)

export default Responsive
