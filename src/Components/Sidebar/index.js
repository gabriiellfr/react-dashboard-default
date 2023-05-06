import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer  } from '@mui/material';
import { Dashboard as DashboardIcon, Settings as SettingsIcon } from '@mui/icons-material';

import { DrawerContainer, IconWrapper, Logo, LogoContainer, StyledList, StyledListItem, StyledListItemText, TextWrapper } from './styles';

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <DrawerContainer>
        <LogoContainer>
          <Logo src="/logo.png" alt="Logo" />
        </LogoContainer>
        <StyledList>
          <StyledListItem button component={Link} to="/dashboard" key="Dashboard" onClick={toggleDrawer}>
            <IconWrapper>
              <DashboardIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />
            </IconWrapper>
            <TextWrapper>
              <StyledListItemText primary="Dashboard" />
            </TextWrapper>
          </StyledListItem>
          <StyledListItem button component={Link} to="/settings" key="Settings" onClick={toggleDrawer}>
            <IconWrapper>
              <SettingsIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />
            </IconWrapper>
            <TextWrapper>
              <StyledListItemText primary="Settings" />
            </TextWrapper>
          </StyledListItem>
        </StyledList>
      </DrawerContainer>
    </Drawer>
  );
};


export default Sidebar;