import React from 'react';
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {useTheme} from "../themes/theme-context";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid grey;
  padding: 10px 16px;

  ${() => {
    const currentTheme = useTheme().theme;
    return currentTheme.palette.mode === 'light'
            ? css`
        background-color: rgb(233, 228, 221);
    ` : css`
        background-color: rgb(22, 27, 34);
    `
  }}
`;

const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <p style={{margin: '0'}}>
                © 2023 {process.env.REACT_APP_AUTHOR_NAME}
            </p>
            <p style={{margin: '0'}}>
                🚀 Version 3.1.13 🚀
            </p>
        </StyledFooter>
    );
}

export default Footer;