import * as React from 'react';
import { makeStyles } from 'tss-react/mui'
import Grid from '@mui/material/Grid';
import PhoneInput  from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const useStyles = makeStyles()((theme) => {
  return {
    phoneInput: {
      marginTop: -22,
      '& .special-label': {
          display: 'block !important',
          position: 'relative !important',
          top: '0px !important',
          left: '0px !important',
          fontSize: '1.25rem !important',
          fontWeight: '600 !important',
          color: '#28293D !important',
          fontFamily: 'Campton !important',
          transform: 'translate(0, 0px) scale(0.75)',
          transformOrigin: 'top left'
      },
      '& .form-control': {
          height: '50px !important',
          width: '100% !important',
          border: '2px solid #E4E4EB !important',
          borderRadius: 8,
          boxShadow: 'none'
      },
      '& .flag-dropdown': {
          backgroundColor: 'transparent !important',
          borderRight: 'none !important',
          borderRadius: '8px 0 0 8px !important',
          border: 'none !important',
          '& .selected-flag': {
              backgroundColor: 'transparent !important',
              '& .flag': {
                  top: '70%'
              }
          }
      }
    },
    error: {
      width: '100%',
      color: '#f93e5a',
      fontSize: '0.75rem',
      fontWeight: 600,
      position: 'absolute',
      bottom: -5,
      left: 15,
      fontFamily: 'Campton',
      [theme.breakpoints.down('sm')]: {
          left: 0,
      }
    },
  };
});

export default function BasicPhoneInput(props) {
  const { classes } = useStyles();
  const {
    sm,
    xs,
    id,
    label,
    value,
    setFieldValue,
    handleBlur,
    touched,
    errors,
    onlyCountries,
    selectedCountry
  } = props

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      item
      sm={sm}
      xs={xs}
      style={{position: 'relative'}}
  >
    <PhoneInput
      country={selectedCountry ? selectedCountry : 'us'}
      onlyCountries={onlyCountries ? onlyCountries : []}
      className={classes.phoneInput}
        inputProps={{
          name: {id},
          id: {id},
        }}
      specialLabel={label}
      value={value}
      onChange={(val)=>setFieldValue(id, val)}
      onBlur={handleBlur}
    />
    {touched ? (
        <span className={classes.error}>
            {errors}
        </span>
    ) : (
        ''
    )}
  </Grid>
  );
}