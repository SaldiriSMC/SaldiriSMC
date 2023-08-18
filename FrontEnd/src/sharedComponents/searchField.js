import React, { useEffect, useState } from "react";
import { makeStyles } from 'tss-react/mui'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
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
        // height: 20,
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

  const [checked, setChecked] = useState(false);

  const handleChangeChk = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      item
      sm={12}
      xs={12}
    >
    <Grid item sm={8} >  <TextField
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
            placeholder='search..'
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
    
          <Checkbox
            checked={checked}
            onChange={handleChangeChk}
            color="primary" // You can customize the color
          />
      
    
          </Grid>
    <Grid item sm={4} > 
    <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChangeChk}
            color="primary" // You can customize the color
          />
        }
        label="Advance Search"
      /></Grid>
        
    {checked && (
<>
<TextField
        id="birthday"
        label="Start Date"
        type="date"
        variant="outlined"
        sx={{ m: 1, width: 250 }} // Applying styles using sx prop
      />
           <TextField
        id="birthday"
        label="End Date"
        type="date"
        variant="outlined"
        sx={{ m: 1, width: 250 }} // Applying styles using sx prop
      />
</>
    )}
       


   
    </Grid>
  )
}

export default MUISearchField
