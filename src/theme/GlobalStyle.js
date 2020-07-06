import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* Breakpoints */
    --break-xs: 480px;
    --break-sm: 768px;
    --break-md: 1080px;
    --break-xl: 1260px;

    /* Colors */
    --color-main: ${props => props.theme.colors.main};
    --color-main-dark: ${props => props.theme.colors.mainDark};
    --color-main-light: ${props => props.theme.colors.mainLight};

    --color-background: ${props => props.theme.colors.background};
    --color-background-dark: ${props => props.theme.colors.backgroundDark};
    --color-background-light: ${props => props.theme.colors.backgroundLight};

    --color-crtR: ${props => props.theme.colors.crtR};
    --color-crtG: ${props => props.theme.colors.crtG};
    --color-crtB: ${props => props.theme.colors.crtB};
    --color-crtGrid: ${props => props.theme.colors.crtGrid};
    --color-crtGrid-transparent: ${props =>
      props.theme.colors.crtGridTransparent};

    /* Border */
    --border-small: 1px solid var(--color-main);
    --border-medium: 2px solid var(--color-main);
    --border-large: 3px solid var(--color-main); 

    /* Dimensions */
    --header-height: ${props => props.theme.dimensions.headerHeight};
    --sidebar-width: ${props => props.theme.dimensions.sidebarWidth};

    /* Spacing */
    --s-4: ${props => props.theme.spacing.sXXXS};
    --s-3: ${props => props.theme.spacing.sXXS};
    --s-2: ${props => props.theme.spacing.sXS};
    --s-1: ${props => props.theme.spacing.sS};
    --s0: ${props => props.theme.spacing.sM}; 
    --s1: ${props => props.theme.spacing.sL};
    --s2: ${props => props.theme.spacing.sXL};
    --s3: ${props => props.theme.spacing.sXXL};
    --s4: ${props => props.theme.spacing.sXXXL};
  }

  html {
    font-size: min(max(0.8rem, 4vw), 22px);
  }


  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }


  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;

    font-family: 'VT323', monospace;
    color: var(--color-main);
    background-color: var(--color-background);
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1, h2, h3, h4, h5 {
    font-size: 2rem;
    text-transform: uppercase;
    /* line-height: 1; */
  }

  p, span {
    font-size: 1.5rem;
    /* text-transform: uppercase; */
    max-width: 60ch;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: var(---break-md)) {
      ::-webkit-scrollbar {
      width: var(--s-1);
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      border: 1px solid var(--color-main);
      border-radius: 0.25rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--color-main);
      border-radius: 0.25rem;
    }
  }


  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle
