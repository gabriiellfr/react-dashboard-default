import React, { useState } from 'react';

import Header from '../../../Components/Header';
import Sidebar from '../../../Components/Sidebar';

import { ContentContainer, Footer, FooterText, GlobalStyle, LayoutContainer, MainContent } from './styles';

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
          <FooterText>
            © 2022 Dashboard. All rights reserved.
          </FooterText>
        </Footer>
      </LayoutContainer>
    </>
  );
};

export default Layout;
