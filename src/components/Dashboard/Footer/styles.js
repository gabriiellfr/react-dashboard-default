import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const FooterContent = styled('footer')({
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
