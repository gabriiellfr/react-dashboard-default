import { Dashboard as DashboardIcon, Settings as SettingsIcon } from '@mui/icons-material';

export const links = [
    {
        to: '/dashboard',
        text: 'Dashboard',
        icon: <DashboardIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />,
    },
    {
        to: '/settings',
        text: 'Settings',
        icon: <SettingsIcon sx={{ color: '#2196F3', fontSize: '1.5rem' }} />,
    },
];
