import * as React from 'react';
import { makeStyles } from 'tss-react/mui'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles()((theme) => {
  return {
    textAreaContainer: {
      '& > div': {
        // height: '100%'
      }
    },
    selectBox: {
      '& > div': {
        textAlign: 'left'
      }
    },
    removeBorder: {
      '& > div': {
        border: 'none',
        textAlign: 'left',
        height: 20,
        '& input': {
          padding: '0px 5px',
        }
      }
    },
    textFieldContainerNoMargin: {
      '& > div': {
        textAlign: 'left'
      }
    },
    textFieldContainer: {
      marginBottom: 30,
      '& > div': {
        textAlign: 'left'
      }
    },
    active: {
      '& > div': {
        color: theme.success?.main
      }
    },
    inactive: {
      '& > div': {
        color: theme.error?.main
      }
    },

  };
});

const MUISearchField = (props) => {
  const {
    sm,
    xs,
    id,
    name,
    label,
    value,
    type,
    handleChange,
    handleBlur,
    touched,
    errors,
    placeholder,
    options,
    multiline,
    rows,
    variant,
    pass,
    disabled,
    readOnly,
    withOutBorder,
    status,
    alignCenter,
    noTitle,
  } = props
  const { classes } = useStyles();


  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      item
      sm={sm}
      xs={xs}
    >
    
          <TextField
            className={`${ noTitle ? classes.textFieldContainerNoMargin :classes.textFieldContainer  } ${multiline ?  classes.textAreaContainer : ''} ${withOutBorder ?  classes.removeBorder : ''} ${alignCenter ? classes.centerAlign : ''}`}
            disabled={disabled}
            id={id}
            label={label}
            variant="outlined"
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            type='text'
            rows={multiline && rows}
            helperText={
                touched
                    ? errors
                    : ''
            }
            error={
                touched &&
                Boolean(errors)
            }
            placeholder={placeholder}
            fullWidth
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
            InputLabelProps={{
                shrink: true,
            }}
          />

      

   
    </Grid>
  )
}

export default MUISearchField
