import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { theme } from './Theme';

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
