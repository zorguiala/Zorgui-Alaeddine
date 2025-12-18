import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Space Mono', monospace;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    overflow: hidden;
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  a {
    color: ${({ theme }) => theme.colors.accent.primary};
    text-decoration: none;
    transition: color 0.2s ease, opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  button {
    font-family: 'Space Mono', monospace;
    cursor: pointer;
    border: none;
    background: none;
    color: inherit;
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.accent.primary};
    color: ${({ theme }) => theme.colors.bg.primary};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bg.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent.primary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent.tertiary};
  }

  canvas {
    display: block;
  }
`;
