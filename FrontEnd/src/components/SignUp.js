import React, {useState} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import MUITextField from "../sharedComponents/textField";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
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
        height:50,
        width:170,
        fontWeight: 600,
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});
function Technologies() {
  const { classes } = useStyles();



  return (
<>
<section >
<Grid container flexDirection='row' display='flex' justifyContent='flex-end' spacing={2} sx={{p:1}}>
     
     <Grid item sm={6} sx={{backgroundColor:'#3B5999'}}>
   <img src="/assets/Background.png" className='w-50 p-4 img-fluid' ></img>
     </Grid>
     {/* <Typography variant="body" className={classes.title} >
         Start, Run and Grow Your Business
          </Typography>  */}
     <Grid item spacing={2} padding={10} container sm={6}>
    <Grid item sm={12} sx={{textAlign:'start'}}>
    <Typography variant="body" >
    Start, Run and Grow Your Business
            </Typography> 
    </Grid>
     <MUITextField
         noTitle
              sm={6}
              xs={6}
              id="surgicalProcedure"
              name="surgicalProcedure"
              placeholder='Company Name'
              label=""
              value=''
            /> 
            <MUITextField
            noTitle
              sm={6}
              xs={6}
              id="surgicalProcedure"
              name="surgicalProcedure"
              label=""
              placeholder='Last Name'
              value=''
            /> 
     <MUITextField
     noTitle
              sm={12}
              xs={12}
              id="surgicalProcedure"
              name="surgicalProcedure"
              placeholder='Email'
              value=''
            /> 
            <MUITextField
            noTitle
              sm={6}
              xs={6}
              id="surgicalProcedure"
              name="surgicalProcedure"
              placeholder='Password '
              value=''
            /> 
          <MUITextField
          noTitle
              sm={6}
              xs={6}
              id="surgicalProcedure"
              name="surgicalProcedure"
              placeholder='Confirm Password'
              value=''
            /> 
            <MUITextField
              sm={12}
              xs={12}
              id="surgicalProcedure"
              name="surgicalProcedure"
               placeholder='Confirm Password'
              value=''
            /> 
            <Grid item sx={{display:'flex', alignItems:'center'}}>
            <Button
                  className={classes.btn}
                 variant="contained"
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
               SIGN UP
               </Button> 
               <Typography variant="body" sx={{ml:3}} >
               Have an account? <span className='text-blue'>Sign In </span>
            </Typography> 
            </Grid>
                     
     </Grid>
 
  
                     
      </Grid>
</section>


</>
  );
}

export default Technologies;

