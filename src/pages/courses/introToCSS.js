import React from 'react'

import { Center, Column, ExternalLink, Header, List, SectionTitle, Stack, Title } from '../../components'

const IntroToCSS = () => (
  <div>
    <Header />
    <Title before="Week 1" number="2" title="Intro to CSS" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this lesson we learned what <strong>CSS</strong> is, how to link <strong>external stylesheets</strong> to
            our HTML documents, and some <strong>CSS properties</strong> used to style our sites.
          </p>
        </Center>
      </Stack>
      <Stack>
        <SectionTitle title="Resources" pullSize={2} />
        <Center>
          <List>
            <Stack>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  MDN: Cascading Style Sheets
                </ExternalLink>
                <p>All you need to know about CSS in one place</p>
              </li>
              <li>
                <ExternalLink href="https://frontend30.com/css-selectors-cheatsheet/">CSS Cheat Sheet</ExternalLink>
                <p>Can't remember how to select a child element? Quick reference to CSS selectors.</p>
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
                <ExternalLink href="https://flukeout.github.io/">CSS Diner</ExternalLink>
                <p>Excellent way of practicing with CSS selectors! Can you get to the last level?</p>
              </li>
              <li>
                <ExternalLink href="https://codeburst.io/block-level-and-inline-elements-the-difference-between-div-and-span-2f8502c1f95b">
                  Block-level and Inline elements: The Difference Between &lt;div&gt; and &lt;span&gt;
                </ExternalLink>
                <p>What's the difference between a Block-level element and an Inline element?</p>
              </li>
              <li>
                <ExternalLink href="https://diana-adrianne.com/purecss-francine/">Francine</ExternalLink>
                <p>
                  Crazy painting made using <strong>only CSS</strong> 🤯
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
