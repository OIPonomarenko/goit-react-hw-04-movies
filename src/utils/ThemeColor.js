import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: '#9ca4ad',
      light: '#3e3e40', 
      dark: '#090a0e',
      contrastText: '#9d2658',

    //   secondary: '#132d4e',
      
    }
  },
});

export const customTheme = createTheme({
  components: {
    // Name of the component
    MuiInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderBottom: '1px solid #9ca4ad',
          outline:'none',
          color:'#9ca4ad'
                   
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          color: '#9ca4ad',

          '& label:focused ': {
            color: '#9ca4ad'
          },
        },
      },
    },

  
  },
});