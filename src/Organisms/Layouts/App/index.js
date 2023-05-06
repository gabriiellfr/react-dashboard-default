// layouts/app/index.js
import React from 'react';

import { Sidebar, Header } from '../../../Components';

import { AppContainer, ContentContainer, MainContent, Footer, FooterText } from './styles';

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      <Sidebar />
      <ContentContainer maxWidth="lg">
        <MainContent>{children}</MainContent>
      </ContentContainer>
      <Footer>
        <FooterText>
          © 2022 Dashboard. All rights reserved.
        </FooterText>
      </Footer>
    </AppContainer>
  );
};

export default Layout;
