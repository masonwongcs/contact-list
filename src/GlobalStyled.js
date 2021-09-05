import styled, { createGlobalStyle } from "styled-components";

export const PrimaryColor = "#1A1F71";
export const SecondaryColor = "#F7B600";

export const MaterialCubicBezier = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export const WrapperWidth = 800;
export const MiniWrapperWidth = 400;

export const Wrapper = styled.div`
  width: ${WrapperWidth}px;
  margin: 0 auto;
  @media screen and (max-width: ${WrapperWidth * 1.1}px) {
    width: 100%;
    padding: 0 0.5rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  .page {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 20;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

export default GlobalStyle;
