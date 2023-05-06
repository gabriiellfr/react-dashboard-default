import React from 'react';

import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

import { AvatarBackground, AvatarWrapper, Logo, Wrapper } from './styles';

const Header = ({ toggleDrawer }) => {
  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #662d8c, #ed1e79)' }}>
      <Toolbar>
        <Wrapper>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
            <MenuIcon fontSize="large" />
          </IconButton>
          <Logo src="/logo.png" alt="Logo" />
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', flexGrow: 1 }}>
            Dashboard
          </Typography>
          <AvatarWrapper>
            <Avatar alt="Avatar Logo" src="/avatar.png" sx={{ width: 32, height: 32 }} />
            <AvatarBackground />
          </AvatarWrapper>
        </Wrapper>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
