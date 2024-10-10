import styled, { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    font-weight: ${myTheme.typografy.fontWeight.medium};
    font-size: ${myTheme.typografy.fontSize.medium};
    line-height: ${myTheme.typografy.lineHeight};
    background-color: ${myTheme.colors.body}; 
    color: ${myTheme.colors.gray};
    font-family: ${myTheme.typografy.fontFamily};
  }
`;
