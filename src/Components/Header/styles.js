import { styled } from '@mui/system';
import { Toolbar, IconButton, Typography } from '@mui/material';

export const ToolbarWrapper = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const IconButtonWrapper = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

export const Logo = styled('img')({
  width: '50%',
  maxWidth: 48,
  height: 'auto',
});

export const TypographyWrapper = styled(Typography)({
  flexGrow: 1,
});

export const AvatarWrapper = styled('div')({
  position: 'relative',
});

export const AvatarBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  zIndex: -1,
});
