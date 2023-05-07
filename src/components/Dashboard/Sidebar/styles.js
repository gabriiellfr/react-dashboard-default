import { styled } from '@mui/system';
import {  ListItem, ListItemText } from '@mui/material';

export const DrawerContainer = styled('div')({
  backgroundColor: '#F2F2F2',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: 260,
  padding: '32px 0',
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',

  '.MuiDrawer-paper': {
    width: 260,
    transition: 'all 0.2s ease-in-out',
  },

  '&.open .MuiDrawer-paper': {
    transform: 'translateX(0)',
  },

  '&.closed .MuiDrawer-paper': {
    transform: 'translateX(-100%)',
  },
});

export const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 80,
});

export const ListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 32,
  paddingLeft: 0,
});

export const ListItemContainer = styled(ListItem)({
  display: 'flex',
  alignItems: 'center',
  height: 48,
  color: '#424242',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#E8F0FE',
  },
});

export const IconContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
});

export const TextContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.875rem',
  marginLeft: 16,
});

export const NavLink = styled('nav')({
  cursor: 'pointer',
});

export const ListItemTextContainer = styled(ListItemText)({
  span: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
});

export const LogoImage = styled('img')({
  width: '50%',
  maxWidth: 100,
  height: 'auto',
});
