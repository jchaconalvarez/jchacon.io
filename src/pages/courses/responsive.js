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

const IntroToCSS = () => (
  <div>
    <Header />
    <Title before="Week 1" number="3" title="Responsive design" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this lesson we learned what <strong>CSS</strong> is, how to link{' '}
            <strong>external stylesheets</strong> to our HTML documents, and
            some <strong>CSS properties</strong> used to style our sites.
          </p>
        </Center>
      </Stack>
      <Stack>
        <SectionTitle title="Resources" pullSize={2} />
        <Center>
          <List>
            <Stack>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance">
                  MDN: Cascade and Inheritance
                </ExternalLink>
                <p>
                  Mozillas Developer Network's page on CSS Cascade, Specificity,
                  and Inheritance.
                </p>
              </li>
              <li>
                <ExternalLink href="https://every-layout.dev/rudiments/boxes/">
                  EveryLayout: Boxes
                </ExternalLink>
                <p>Great writeup on CSS Box model.</p>
              </li>
              <li>
                <ExternalLink href="https://css-tricks.com/what-you-should-know-about-collapsing-margins/">
                  CSS Tricks: What You Should Know About Collapsing Margins
                </ExternalLink>
                <p>
                  <em>Why are my margins not working?</em> Find out here.
                </p>
              </li>
              <li>
                <ExternalLink href="https://dev.to/emmawedekind/css-specificity-1kca">
                  Dev.to: CSS Specificity
                </ExternalLink>
                <p>Great article on CSS specificity, with examples.</p>
              </li>
              <li>
                <ExternalLink href="https://alligator.io/css/understanding-specificity-in-css/">
                  Alligator.io: Understanding Specificity in CSS
                </ExternalLink>
                <p>Extra information on this tricky subject.</p>
              </li>

              <li>
                <ExternalLink href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
                  CSS Tricks: A Guide To Flexbox
                </ExternalLink>
                <p>
                  Incredibly useful breakdown of what Flexbox is and what each
                  of it's properties does.
                </p>
              </li>
            </Stack>
          </List>
        </Center>
      </Stack>
    </Column>
  </div>
)

export default IntroToCSS
