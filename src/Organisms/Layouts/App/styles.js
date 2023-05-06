import styled, { createGlobalStyle } from 'styled-components';
import { Container, Typography } from '@mui/material';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const LayoutContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled(Container)`
  padding-top: 80px;
  flex-grow: 1;
  margin-top: 32px;
  margin-bottom: 64px;
`;

export const MainContent = styled.main`
`;

export const Footer = styled.footer`
  height: 64px;
  background: linear-gradient(to bottom right, #3f51b5, #2196f3);
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

export const FooterText = styled(Typography)`
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
