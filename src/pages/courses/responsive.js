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
        <Stack>
          <SectionTitle title="Examples" pullSize={2} />
          <Center>
            <h3>evernote.html</h3>
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
            <h3>evernote.css</h3>
            <pre style={{ fontSize: '12px' }}>
              {`
                  * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                  }
                  
                  html {
                    font-size: 20px;
                  }
                  
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                  }
                  
                  header {
                    display: flex;
                    justify-content: space-between;
                    padding: 20px;
                  }
                  
                  .hamburger {
                    width: 44px;
                    height: 44px;
                  }
                  
                  .hero-img {
                    background: green;
                    padding: 4rem 2rem;
                  }
                  
                  .hero-main {
                    color: white;
                    line-height: 2em;
                    display: flex;
                    flex-direction: column;
                  }
                  
                  .hero-main h4 {
                    margin-top: 2rem;
                  }
                  
                  .hero-secondary img {
                    width: 100%;
                  }
                  
                  .hero-button {
                    background: white;
                    border-radius: 3px;
                    padding: 1rem;
                    color: green;
                    text-decoration: none;
                    text-transform: uppercase;
                    margin-top: 2rem;
                    text-align: center;
                    font-weight: bold;
                    letter-spacing: 1.5px;
                  }
                  
                  .navigation {
                    display: none;
                  }
                  
                  /* tablet */
                  @media screen and (min-width: 700px) {
                    .hero-img {
                      /* background: yellow; */
                    }
                  }
                  
                  @media screen and (min-width: 1024px) {
                    .hero-img {
                      display: flex;
                      flex-direction: row;
                    }
                  
                    .hero-main,
                    .hero-secondary {
                      width: 50%;
                    }
                  
                    .hero-secondary {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      padding: 2rem 1rem 2rem 3rem;
                    }
                  
                    .hero-button {
                      align-self: flex-start;
                    }
                  
                    .hamburger {
                      display: none;
                    }
                  
                    .header-left {
                      display: flex;
                    }
                  
                    .navigation {
                      display: flex;
                      align-items: center;
                    }
                  
                    ul {
                      display: flex;
                      list-style: none;
                      justify-content: space-around;
                      align-items: center;
                    }
                  
                    .nav-item {
                      margin-left: 1rem;
                      text-transform: uppercase;
                    }
                  }
                `}
            </pre>
          </Center>
        </Stack>
      </Stack>
    </Column>
  </div>
)

export default Responsive
