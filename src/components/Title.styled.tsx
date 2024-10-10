import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const Title = styled.h1`
  font-size: ${myTheme.typografy.fontSize.large};
  color: ${myTheme.colors.dark};
  font-weight: ${myTheme.typografy.fontWeight.bold};
  line-height: ${myTheme.typografy.lineHeight};
`;
