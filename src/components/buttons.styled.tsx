import styled from "styled-components";
import { css } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type ButtonPropsType = {
  active?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  font-weight: ${myTheme.typografy.fontWeight.bold};
  font-size: ${myTheme.typografy.fontSize.small};
  font-family: ${myTheme.typografy.fontFamily};
  line-height: ${myTheme.button.lineHeight};
  color: ${myTheme.colors.accent};
  border: ${myTheme.button.border};
  border-color: ${myTheme.colors.accent};
  padding: ${myTheme.button.padding};
  border-radius: ${myTheme.button.borderRadius};
  background-color: transparent;
  cursor: pointer;

  ${(props) =>
    props.active === true &&
    css<ButtonPropsType>`
      background-color: ${myTheme.colors.accent};
      color: ${myTheme.colors.light};
      border: none;
    `}
`;

// export const ActiveButton = styled(Button)`
//   background-color: ${myTheme.colors.accent};
//     color: ${myTheme.colors.light};
//     border: none;
// `;
