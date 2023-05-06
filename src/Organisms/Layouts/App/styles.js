import { styled } from '@mui/system';
import { Container, Typography, Box } from '@mui/material';

export const AppContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const ContentContainer = styled(Container)({
  paddingTop: 80,
  flexGrow: 1,
  marginTop: 32,
  marginBottom: 64,
  paddingRight: 24,
  paddingLeft: 24,
});

export const MainContent = styled(Box)({});

export const Footer = styled('footer')({
  height: 64,
  backgroundColor: '#3f51b5',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  borderRadius: '8px 8px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const FooterText = styled(Typography)({
  color: '#fff',
  textAlign: 'center',
});
