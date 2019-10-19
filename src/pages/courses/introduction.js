import React from 'react'
import { Helmet } from 'react-helmet'

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

const Introduction = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>1. Introduction</title>
      <link rel="canonical" href="https://www.jchacon.io" />
    </Helmet>
    <Header />
    <Title before="Week 1" number="1" title="Introduction" main />
    <Column>
      <Stack>
        <SectionTitle title="Summary" pullSize={2} />
        <Center>
          <p>
            In this introduction to HTML we covered HTML basics such as the{' '}
            <strong>DOM tree</strong>, how to write HTML elements, the
            difference between <strong>inline</strong> and{' '}
            <strong>block</strong> elements, and some basic tags like{' '}
            <strong>&lt;p&gt;</strong> and <strong>&lt;h1&gt;</strong>.
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
                  <i>Getting started with the Web</i> is a concise series
                  introducing you to the practicalities of web development.
                </p>
              </li>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomy_of_an_HTML_element">
                  MDN: Anatomy of an HTML element
                </ExternalLink>
                <p>
                  What does an HTML element look like? You can find out here.
                </p>
              </li>
              <li>
                <ExternalLink href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                  MDN: HMTL5
                </ExternalLink>
                <p>All the information about HTML5 you will ever need.</p>
              </li>
              <li>
                <ExternalLink href="http://www.html5doctor.com">
                  HTML5 Doctor
                </ExternalLink>
                <p>
                  Great resource for getting information about the different
                  HTML elements.
                </p>
              </li>
              <li>
                <ExternalLink href="https://codeburst.io/block-level-and-inline-elements-the-difference-between-div-and-span-2f8502c1f95b">
                  Block-level and Inline elements: The Difference Between
                  &lt;div&gt; and &lt;span&gt;
                </ExternalLink>
                <p>
                  What's the difference between a Block-level element and an
                  Inline element?
                </p>
              </li>
              <li>
                <ExternalLink href="https://google.github.io/styleguide/htmlcssguide.html">
                  Google HTML/CSS Style Guide
                </ExternalLink>
                <p>
                  Not sure how to write HTML? Do attributes go in capital
                  letters? Do I use double or single quotes? This is Google's
                  very own code style guide for HTML/CSS.
                </p>
              </li>
              <li>
                <ExternalLink href="https://codepen.io/freeCodeCamp/full/zNqgVx">
                  EXE: Tribute page
                </ExternalLink>
                <p>Example tribute page.</p>
              </li>
            </Stack>
          </List>
        </Center>
        <Stack>
          <SectionTitle title="Examples" pullSize={2} />
          <Center>
            <h3>tribute.html</h3>
            <pre style={{ fontSize: '12px' }}>
              {`
                <!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" href="./tribute_finished.css" />
                    <title>Tribute: Thor Jubera</title>
                  </head>
                  <body>
                    <header>
                      <h1>Thor Jubera</h1>
                      <p>Computer Science & Multimedia Engineer</p>
                    </header>

                    <figure>
                      <img
                        src="https://www.ironhack.com/assets/instructors/thor-jubera.jpg"
                        alt="Thor Jubera"
                      />
                      <figcaption>Thor, hard at work.</figcaption>
                    </figure>

                    <main>
                      <h2>Here's a timeline of Thor's life:</h2>
                      <div class="timeline-container">
                        <ul>
                          <li class="timeline-list-item"><b>1950</b> - Born</li>
                          <li class="timeline-list-item" id="highlight">
                            <b>1951</b> - Coded first web page
                          </li>
                          <li class="timeline-list-item bold">
                            <b>1952</b> - Learned to speak
                          </li>
                          <li class="timeline-list-item bold">
                            <b>2016</b> - Started torturing people @ Ironhack
                          </li>
                        </ul>
                      </div>

                      <blockquote class="quote" cite="Thor Jubera">
                        <p>Su puta madre!</p>
                        <cite>-- Thor Jubera</cite>
                      </blockquote>
                    </main>

                    <footer>
                      <h3>
                        If you have time, you should find out more about this incredible human
                        being on his <a href="#">Wikipedia Entry</a>
                      </h3>
                    </footer>
                  </body>
                </html>
              `}
            </pre>
          </Center>
          <Center>
            <h3>tribute.css</h3>
            <pre style={{ fontSize: '12px' }}>
              {`
                body {
                  background: cornflowerblue;
                  color: white;
                  font-size: 20px;
                  font-family: Arial, Helvetica, sans-serif;
                }

                header {
                  text-align: center;
                }

                figure {
                  background: white;
                  padding: 16px;
                  color: black;
                  text-align: center;
                }

                figure img {
                  display: block;
                  margin: 0 auto 16px auto;
                }

                main {
                  text-align: center;
                }

                .timeline-container {
                  max-width: 500px;
                  margin: 0 auto;
                  text-align: left;
                }

                .timeline-list-item {
                  margin: 16px 0;
                }

                .bold {
                  font-weight: bold;
                  font-family: Arial, Helvetica, sans-serif;
                }

                /* #highlight {
                  background: yellow;
                  color: black;
                  font-size: 24px;
                } */

                .quote {
                  margin-top: 100px;
                  font-style: italic;
                }

                footer {
                  margin-top: 100px;
                  text-align: center;
                }

              `}
            </pre>
          </Center>
        </Stack>
      </Stack>
    </Column>
  </div>
)

export default Introduction
