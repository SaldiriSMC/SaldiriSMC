import * as React from 'react';
import { makeStyles } from 'tss-react/mui'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

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
    // centerAlign: {
    //   '& label': {
    //     width: '100%',
    //     textAlign: 'center'
    //   },
    //   '& > div': {
    //     '& input': {
    //       textAlign: 'center'
    //     }
    //   }
    // }
  };
});

const MUITextField = (props) => {
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
  const renderOptionsHandler = (list) => {
    let result;
    if (pass === 'value') {
      result = list.map(item => <MenuItem value={item.code} key={item.id}>{`${item.value}/${item.department}`}</MenuItem>)
    } else if (pass === 'designation') {
      result = list.map(item => <MenuItem value={item.id} key={item.id}>{item.designationName}</MenuItem>)
    } else if(pass === 'department') {
      result = list.map(item => <MenuItem value={item.id} key={item.id}>{item.departmentName}</MenuItem>)
    } else if(pass === 'name-value') {
      result = list.map(item => <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>)
    } else if(pass === 'code') {
      result = list.map(item => <MenuItem value={item.code} key={item.id}>{item.name}</MenuItem>)
    } else {
      result = list.map(item => <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>)
    }
    return result
  }


console.log("erroe-------------------in fiels",errors)

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      item
      sm={sm}
      xs={xs}
      md={3}
    >
      {
        type === 'select' ? (
          <TextField
            sx={{
                '& .MuiSelect-select .notranslate::after': placeholder
                    ? {
                        content: `"${placeholder}"`,
                        opacity: 0.42,
                      }
                    : {},
            }}
            disabled={disabled}
            value={value}
            className={`${classes.mb20} ${classes.selectBox} ${withOutBorder ?  classes.removeBorder : ''}`}
            id={id}
            name={name}
            label={label}
            variant="outlined"
            onChange={variant !== 'inner' ? handleChange(`${id}`) : handleChange}
            onBlur={handleBlur}
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
            InputLabelProps={{
                shrink: true,
            }}
            select
            SelectProps={{
              readOnly: readOnly,
              MenuProps: {
                  anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'center'
                  },
              }
            }}
          >
            {
              renderOptionsHandler(options)  
            }
          </TextField>
        ) : (
          <TextField
            className={`${ noTitle ? classes.textFieldContainerNoMargin :classes.textFieldContainer  } ${multiline ?  classes.textAreaContainer : ''} ${withOutBorder ?  classes.removeBorder : ''} ${alignCenter ? classes.centerAlign : ''}`}
            disabled={disabled}
            style={{top: 11}}
            id={id}
            label={label}
            variant="outlined"
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            type={type === 'number' ?  'number' : type === 'password'? 'password' :'text'}
            multiline={multiline}
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
            InputProps={{readOnly: readOnly, inputProps: { min: 0 },}}
            InputLabelProps={{
                shrink: true,
            }}
          />
        )
      }
    </Grid>
  )
}

export default MUITextField
