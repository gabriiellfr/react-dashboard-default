import React from 'react';

import { AppBar, Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { useDrawer } from '../../../providers';

import {
  AvatarBackground,
  AvatarWrapper,
  Logo,
  ToolbarWrapper,
  IconButtonWrapper,
  TypographyWrapper,
} from './styles';

const Header = () => {
  const { toggleDrawer } = useDrawer();

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #662d8c, #ed1e79)' }}>
      <ToolbarWrapper>
        <IconButtonWrapper edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon fontSize="large" />
        </IconButtonWrapper>
        <Logo src="/logo.png" alt="Logo" />
        <TypographyWrapper variant="h6" sx={{ color: 'white', fontWeight: 'bold', flexGrow: 1 }}>
          Dashboard
        </TypographyWrapper>
        <AvatarWrapper>
          <Avatar alt="Avatar Logo" src="/avatar.png" sx={{ width: 32, height: 32 }} />
          <AvatarBackground />
        </AvatarWrapper>
      </ToolbarWrapper>
    </AppBar>
  );
};

export default Header;
