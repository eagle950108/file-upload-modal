import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#1c3e6e',
      light: '#4b668d',
      dark: '#051d59',
    },
    secondary: {
      main: '#fa9d26',
      light: '#fcb645',
      dark: '#e48d1d',
    },
    ternary: {
      main: '#31a950',
      light: '#52c47a',
      dark: '#299745',
    },
  },
});

export default theme;
