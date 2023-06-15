import * as React from 'react';
import { makeStyles } from 'tss-react/mui'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles()((theme) => {
  return {
    label: {
      color: '#000 !important',
      fontSize: 18,
      fontWeight: 500,
    },
    label_col: {
      color: '#000 !important',
      fontSize: 18,
      fontWeight: 500,
      marginLeft:5,
    },
    direction_row: {
      flexDirection:'row',
      display:'flex',
      alignItems:'center',
    },
    direction_col: {
      display:'flex',
    }
  };
});

export default function RadioButtonsGroup(props) {
  const { classes } = useStyles();
  const {
    sm,
    xs,
    id,
    name,
    label,
    value,
    options,
    setFieldValue,
    setTouched,
    disabled,
    handleSave,
    directionRow
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
    >
        <FormControl className={directionRow ? classes.direction_row : classes.direction_col } style={{width: '100%'}}>
            <FormLabel className={directionRow ?  classes.label_col :  classes.label}>{label}</FormLabel>
            <RadioGroup
            className={directionRow ?  classes.label_col :  classes.label}
                row
                id={id}
                name={name}
                value={value}
                onChange={(event) => {
                  setFieldValue(
                      id,
                      event.currentTarget.value
                  )
                }}
            >
              {
                options.map(item => <FormControlLabel value={item.value} key={item.value} control={<Radio/>} label={item.label} disabled={disabled} />)
              }
            </RadioGroup>
        </FormControl>
    </Grid>
  );
}