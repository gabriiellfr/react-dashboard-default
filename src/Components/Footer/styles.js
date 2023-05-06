import { styled } from '@mui/system';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  py: 2,
}));

export const FooterText = styled(Typography)(({ theme }) => ({
  textAlign: {
    xs: 'center',
    md: 'left',
  },
}));
