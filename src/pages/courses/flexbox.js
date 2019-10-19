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

const Flexbox = () => (
  <div>
    <Header />
    <Title before="Week 1" number="3" title="Flexbox" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this lesson we saw some of the weird parts of CSS like{' '}
            <strong>collapsing margins</strong>, <strong>specificity</strong>,
            and <strong>inheritance</strong>.
          </p>
          <p>
            We practiced the use of <strong>CSS Selectors</strong> and learned
            how to use <strong>Flexbox</strong> to build our site's layout.
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
              <li>
                <ExternalLink href="https://cssreference.io/flexbox/">
                  CSS Reference: Flexbox
                </ExternalLink>
                <p>Another great resource on Flexbox and it's terminology.</p>
              </li>
            </Stack>
          </List>
        </Center>
        <Stack>
          <SectionTitle title="Examples" pullSize={2} />
          {/* <div> */}
          <Center>
            <h3>flexbox.html</h3>
            <pre style={{ fontSize: '12px' }}>
              {`
                  <!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                      <link rel="stylesheet" href="flexbox.css" />
                      <title>Flexbox</title>
                    </head>
                    <body>
                      <header>
                        <h1>Header</h1>
                      </header>
                      <section class="first-section">
                        <div class="content"></div>
                        <div class="content"></div>
                        <div class="content"></div>
                      </section>
                      <section class="section-2">
                        <div class="img"></div>
                        <div class="img"></div>
                      </section>
                  
                      <section class="section-3">
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                        <div class="card"></div>
                      </section>
                    </body>
                  </html>
                  `}
            </pre>
            {/* </div> */}
            <h3>flexbox.css</h3>
            <pre style={{ fontSize: '12px' }}>
              {`
                header {
                  display: flex;
                  background: gray;
                }
                
                .first-section {
                  display: flex;
                  background: lightgray;
                  height: 200px;
                
                  justify-content: space-evenly;
                  align-items: center;
                }
                
                .content {
                  width: 100px;
                  height: 100px;
                  border-radius: 50%;
                  background: black;
                }
                
                .section-2 {
                  height: 400px;
                  background: firebrick;
                  display: flex;
                  justify-content: space-evenly;
                  align-items: center;
                }
                
                .img {
                  width: 30%;
                  height: 50%;
                  background: green;
                  border: 4px solid white;
                }
                
                .section-3 {
                  background: cyan;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-evenly;
                  padding-top: 20px;
                }
                
                .card {
                  width: 30%;
                  margin-bottom: 20px;
                  height: 400px;
                  border-radius: 20px;
                  box-shadow: 1px 5px 3px rgba(0, 0, 0, 0.5);
                  background: white;
                }
              `}
            </pre>
          </Center>
        </Stack>
      </Stack>
    </Column>
  </div>
)

export default Flexbox
