import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            body: {
                margin: 0,
                padding: 0,
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            },
            '#root': {
                height: '100%',
            },
        },
    })
);

const GlobalStyles = () => {
    useStyles();
    return null;
};

export default GlobalStyles;
