import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
            contrastText: '#fff',
        },
        background: {
            default: '#f5f5f5',
        },
    },
});

export default theme;
