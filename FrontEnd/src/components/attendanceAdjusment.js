import React, {useEffect, useState, useRef} from 'react';
import * as Yup from "yup";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import CommentIcon from '@mui/icons-material/Comment';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from 'tss-react/mui';
import Clock from 'react-clock';
import Table from '../sharedComponents/table'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import './comaon.css';
import { useFormik } from "formik";
import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import RadioButtonsGroup from "../sharedComponents/radioButton";
import BasicPhoneInput from "../sharedComponents/phoneInput";
import Button from '@mui/material/Button';
import { signupSchemaCompany, signupSchemaUser } from "../Yup Schema";
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
        background: theme.palette.white?.main,
        padding: "40px 20px 20px 20px",
        borderRadius: 10,
        position: "relative",
        margin: "20px 0",
      },
      btn: {
        display:'flex',
        borderRadius: 10,
        height:40,
        marginRight:10,
        width:100,
        fontWeight: 600,
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});
const AttendanceAdjusment = ({attendanceRecord}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const initialValues = {
    user: "",
    password: "",
  };
  const chartRef = useRef(null);
  const { classes } = useStyles();
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues,

      onSubmit: async (data) => {
        dispatch(
          // logIn({
          //   credentials:{
          //     email: data.email,
          //   password: data.password
          // },
          // })
        );
      }
    });


    const users=[{value:'Abdullah',department:'dev',id:'1'},
                {value:'Hassan',department:'HR',id:'1'},
                {value:'Raza',department:'dev',id:'1'}
  ]


  return (
    <div>

<Grid container flexDirection='row' display='flex' justifyContent='' spacing={1} sx={{p:1}}>
     
     <Grid display='flex' justifyContent='space-between' alignItems='center' item sm={12} md={6}  >
              <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, pl:3, width: '40ch',textAlign:'start' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          InputProps={{
            sx: {
                "& input": {
                    textAlign: "left"
                }
            }
        }}
          defaultValue="Abdullah"
        >
          {users.map((item) => (
            <MenuItem key={item.value} value={item.value}>
            {`${item.value} / ${item.department} / ${item.department}`}
            </MenuItem>
          ))}
        </TextField>
       
      </div>
    </Box>

    <div style={{textAlign:'end'}}>
      <h6> Date: <span>{date}</span></h6> 
      <h6> Total Hours : 10 Hour</h6>
    
    </div>
     </Grid>
     <Grid item spacing={2} padding={10} justifyContent='start' alignContent='flex-start' alignItems='start' container md={6}  sm={12}>
    <Grid item sm={12} >

    </Grid>
                <>
 
            <Grid  item sm={6} style={{display:'flex',justifyContent:'flex-end'}}>

  

            </Grid>
            </>
                
     </Grid>              
      </Grid>
      <Grid container flexDirection='row' display='flex' justifyContent=''  sx={{p:1}}>
     
     <Grid sx={{pl:3}} spacing={2} justifyContent='center' alignItems='center' item sm={12} md={6}  >

<Table/>

<Grid item sx={{display:'flex', alignItems:'center',justifyContent:'flex-end',my:3}}>
            <Button
                  className={classes.btn}
                 variant="contained"
                 type='submit'
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
             Cancel
               </Button> 
            <Button
                  className={classes.btn}
                 variant="contained"
                 type='submit'
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
               Save
               </Button> 
     
            </Grid>

  
     </Grid>
     <Grid item spacing={2} justifyContent='center' alignContent='flex-start' alignItems='start' container md={6}  sm={12}>

                <>

            <div style={{display:'flex',justifyContent:'flex-end'}}>
            <Clock value={value} />
    </div>


            </>
                
     </Grid>              
      </Grid>

 
    </div>
  );
};

export default AttendanceAdjusment;
