import React from 'react';
import PropTypes from 'prop-types';

import { Sidebar, Header } from '../../../Components';

import { AppContainer, ContentContainer, MainContent, Footer, FooterText } from './styles';

const AppLayout = ({ children }) => {
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

AppLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppLayout;
