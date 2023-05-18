import { LineWeight } from '@mui/icons-material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    mode: 'light',
    action: {
      disabledBackground: 'rgba(0, 117, 255, .7)',
      disabled: '#ffffff'
    },
    primary: {
      main: '#0075FF', //
    },
    secondary: {
      main: '#314B93', //
    },
    warning: {
      main: '#FAC032',
    },
    success: {
      main: '#05AB57',
    },
    error: {
      main: '#f93e5a',
    },
    white: {
      main: '#ffffff',
    },
    text: {
      primary: '#000000', //
      secondary: '#28293D',
      disabled: '#CACCCF',
    },
    color: {
      gray1: '#C7C9D9', //
      gray2: '#555770',
      gray3: '#E4E4EB',
      gray4: '#E8E8E8',
      white1: '#F2F2F5',
      blue: '#0D2874',
      blue1: '#D5E6FD',
      darkBlue: '#274189',
      orange: '#FDAC42',
      black: '#18295A'
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: '2px solid #E4E4EB',
          height: 50,
        },
      }
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiButton-outlined': {
            '&.Mui-disabled': {
              color: '#0075FF !important',
              opacity: 0.5
            }
          }
        },
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          display: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'translate(4px, -30px) scale(1)',
          color: "#28293D",
          fontWeight: 700,
          "&.Mui-focused": {
            "color": "#28293D"
          },
          "&.Mui-error": {
            "color": "#28293D",
          }
        },
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: '5px 0 0 0',
          position: 'absolute',
          bottom: -22
        }
      }
    },
  },
  typography: {
    fontFamily: 'Campton',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '3.75rem',
    },
    h3: {
      fontSize: "1.5rem", //
      fontWeight: 600, //
    },
    h4: {
      fontSize: '2rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.125rem',
      color: '#0075FF'
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: '0.85rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      color: '#000000',
    },
    body2: {
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    button: {
      fontSize: '1rem',
      textTransform: 'none',
    },
    caption: {
      fontWeight: 700,
      fontSize: '0.75rem',
    },
    overline: {
      fontWeight: 700,
      fontSize: '0.625rem',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440
    },
  },
});

export default responsiveFontSizes(theme);
