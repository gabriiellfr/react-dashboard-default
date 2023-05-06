import React from 'react';

import { Sidebar, Header } from '../../../Components';

import { ContentContainer, Footer, FooterText, GlobalStyle, LayoutContainer, MainContent } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header />
        <Sidebar />
        <ContentContainer>
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
