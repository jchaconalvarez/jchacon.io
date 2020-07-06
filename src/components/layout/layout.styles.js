import styled, { css, keyframes } from 'styled-components'

const generateFlickerAnimation = () => {
  let animation = ''

  for (let i = 0; i < 20; i++) {
    animation += `${i * (1 / 20) * 100}% { opacity: ${
      (Math.random() * (10 - 9.5) + 9.5) / 10
    } }`
  }

  return css`
    ${animation}
  `
}

const flicker = keyframes`
  ${generateFlickerAnimation()}
`

const refresh = keyframes`
  0% {
    transform: translateY(0vh);
  }
  100% {
    transform: translateY(100vh);
  }
`

export const Refresh = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  opacity: 0.5;
  background: var(--color-background);

  pointer-events: none;

  animation: ${refresh} 1s;
  animation-fill-mode: forwards;
`

export const AppWrapper = styled.div`
  height: 100vh;
  padding: var(--s0);

  overflow: hidden;

  filter: blur(0.045rem);

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: var(--color-crtGrid-transparent);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        var(--color-crtGrid-transparent) 50%,
        var(--color-crtGrid) 50%
      ),
      linear-gradient(
        90deg,
        var(--color-crtR),
        var(--color-crtG),
        var(--color-crtB)
      );
    z-index: 2;
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
  }

  animation: ${flicker} 0.15s infinite;
`

export const Screen = styled.div`
  border: 2px solid var(--color-main);

  height: 100%;
`

export const Content = styled.div`
  height: calc(100% - var(--header-height) - 4rem);
  padding: var(--s0);

  display: flex;
`

export const Main = styled.main`
  overflow-y: scroll;

  > * + * {
    margin-top: var(--s0);
  }
`
