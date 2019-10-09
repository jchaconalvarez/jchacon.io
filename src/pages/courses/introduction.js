import React from 'react'

import { Center, Column, ExternalLink, Header, List, SectionTitle, Stack, Title } from '../../components'

const Introduction = () => (
  <div>
    <Header />
    <Title before="Week 1" number="1" title="Introduction" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this introduction to HTML we covered HTML basics such as the <strong>DOM tree</strong>, how to write HTML
            elements, the difference between <strong>inline</strong> and <strong>block</strong> elements, and some basic
            tags like &lt;p&gt; and &lt;h1&gt;.
          </p>
        </Center>
      </Stack>
      <Stack>
        <SectionTitle title="Resources" pullSize={2} />
        <Center>
          <List>
            <Stack>
              <li>
                <ExternalLink href="http://info.cern.ch/hypertext/WWW/TheProject.html">
                  The World's first web page
                </ExternalLink>
                <p>Take a look at the world's first webpage, made in 1991!</p>
              </li>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web">
                  MDN: Getting Started with the Web
                </ExternalLink>
                <p>
                  <i>Getting started with the Web</i> is a concise series introducing you to the practicalities of web
                  development.
                </p>
              </li>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomy_of_an_HTML_element">
                  MDN: Anatomy of an HTML element
                </ExternalLink>
                <p>What does an HTML element look like? You can find out here.</p>
              </li>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                  MDN: HMTL5
                </ExternalLink>
                <p>All the information about HTML5 you will ever need.</p>
              </li>
              <li>
                <ExternalLink href="http://www.html5doctor.com">HTML5 Doctor</ExternalLink>
                <p>Great resource for getting information about the different HTML elements.</p>
              </li>
              <li>
                <ExternalLink href="https://codeburst.io/block-level-and-inline-elements-the-difference-between-div-and-span-2f8502c1f95b">
                  Block-level and Inline elements: The Difference Between &lt;div&gt; and &lt;span&gt;
                </ExternalLink>
                <p>What's the difference between a Block-level element and an Inline element?</p>
              </li>
              <li>
                <ExternalLink href="https://codepen.io/freeCodeCamp/full/zNqgVx">EXE: Tribute page</ExternalLink>
                <p>Example tribute page.</p>
              </li>
            </Stack>
          </List>
        </Center>
      </Stack>
    </Column>
  </div>
)

export default Introduction
