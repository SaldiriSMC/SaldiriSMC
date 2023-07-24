// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { format } from 'date-fns'
// import { makeStyles } from 'tss-react/mui'

// const useStyles = makeStyles()((theme) => {
//   return {
//     datePickerContainer: {
//       width: '100%',
//       '& > div': {
//         width: '100%',
//         marginTop: 10,
        
//         // '&:nth-child(1)': {
//         //   display: 'none'
//         // }
//       },
//       '& label': {
//         marginTop: 10,
//       }
//     },
//     removeBorder: {
//       '& > div': {
//         border: 'none'
//       }
//     }
//   };
// });

// export default function BasicDateTimePicker(props) {
//   const { classes } = useStyles();
//   const { 
//     sm, 
//     xs, 
//     id, 
//     label,
//     value,
//     setFieldValue,
//     handleChange,
//     readOnly,
//     withOutBorder,
//     dateFormat
//   } = props

//   return (
//     <Grid
//       container
//       direction="row"
//       justifyContent="center"
//       alignItems="center"
//       item
//       sm={sm}
//       xs={xs}
//     >
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <DateTimePicker
//           readOnly={readOnly}
//           className={`${classes.datePickerContainer} ${withOutBorder ?  classes.removeBorder : ''}`}
//           label={label}
//           value={value}
//           // onChange={(value)=>handleChange ? handleChange(value) : setFieldValue(`${id}`, format(new Date(value), "yyyy-MM-dd hh:mm a"))}
//           onChange={(value)=> new Date(value).toString() === 'Invalid Date' ? '' : handleChange ? handleChange(value) : setFieldValue(`${id}`, format(new Date(value), "yyyy-MM-dd hh:mm a"))}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//     </Grid>
//   );
// }