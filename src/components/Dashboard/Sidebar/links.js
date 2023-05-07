import { styled } from '@mui/system';
import { Dashboard as DashboardIcon, Settings as SettingsIcon } from '@mui/icons-material';

const StyledIcon = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '1.5rem',
}));

export const links = [
  {
    to: '/dashboard',
    text: 'Dashboard',
    icon: <StyledIcon as={DashboardIcon} />,
  },
  {
    to: '/settings',
    text: 'Settings',
    icon: <StyledIcon as={SettingsIcon} />,
  },
];
