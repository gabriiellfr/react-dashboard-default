import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Container, Typography } from '@mui/material';

import Header from '../../../Components/Header';
import Sidebar from '../../../Components/Sidebar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const LayoutContainer = styled.div`
  background-color: #f5f5f5;
`;

const ContentContainer = styled(Container)`
  padding-top: 80px;
  padding-bottom: 64px;
`;

const MainContent = styled.main`
  margin: 32px 0;
`;

const Footer = styled.footer`
  background: linear-gradient(to bottom right, #3f51b5, #2196f3);
  padding: 24px;
  border-radius: 8px 8px 0 0;
  margin-top: auto;
`;

const FooterText = styled(Typography)`
  color: #fff;
  text-align: center;
  padding-top: 8px;
`;

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header toggleDrawer={toggleDrawer} />
        <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <ContentContainer maxWidth="xl">
          <MainContent>{children}</MainContent>
        </ContentContainer>
        <Footer>
          <FooterText variant="caption" align="center">
            © 2022 Dashboard. All rights reserved.
          </FooterText>
        </Footer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
