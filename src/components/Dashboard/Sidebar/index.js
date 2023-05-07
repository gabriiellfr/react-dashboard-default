import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';

import {
  DrawerContainer,
  IconContainer,
  LogoContainer,
  ListContainer,
  ListItemContainer,
  ListItemTextContainer,
  NavLink,
  TextContainer,
  LogoImage,
} from './styles';

import { useDrawer } from '../../../providers';

import { links } from './links';

const Sidebar = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <DrawerContainer>
        <LogoContainer>
          <LogoImage src="/logo.png" alt="Logo" />
        </LogoContainer>
        <NavLink onClick={toggleDrawer}>
          <ListContainer>
            {links.map(({ to, text, icon, iconProps }) => (
              <ListItemContainer key={to} button component={Link} to={to}>
                <IconContainer>
                  {React.cloneElement(icon, iconProps)}
                </IconContainer>
                <TextContainer>
                  <ListItemTextContainer primary={text} />
                </TextContainer>
              </ListItemContainer>
            ))}
          </ListContainer>
        </NavLink>
      </DrawerContainer>
    </Drawer>
  );
};

export default Sidebar;
