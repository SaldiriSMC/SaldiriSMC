import React, { useEffect,useState } from "react";
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import * as Yup from "yup";
import { createRecordsddfdsdssssdss } from "../actions/Recordsddfdsdssssdss";
import Modal from '@mui/material/Modal';
import MUITextField from "../sharedComponents/textField";
import Button from '@mui/material/Button'
import { useFormik } from "formik";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid'
import CancelIcon from '@mui/icons-material/Cancel';
const useStyles = makeStyles()((theme) => {
    return {
        mainContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 700,
            background: theme.palette.white.main,
            borderRadius: 24,
            padding: '10px 10px 10px 10px',
            textAlign: 'center',
            [theme.breakpoints.down('md')]: {
                width: 'auto'
            },
            [theme.breakpoints.down('sm')]: {
                width: '300px'
            }
        },
        imgFullWidth:{
          width:'100%'
           },
        avatar: {
          width: 160,
          height: 160,
          position: 'absolute',
          top: -90,
          left: 15,
          borderRadius: '100%',
          border: `4px solid red`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: theme.palette.primary.main,
          fontWeight: 700,
          fontSize: 18,
          marginRight: 15
        },
        uploadFileBtn: {
          position: 'absolute',
          bottom: 0,
          right: 0
        },
        iconWrapper: {
            background: 'rgba(0, 113, 188, 0.08)',
            width: 90,
            height: 90,
            margin: '0 auto 36px',
            borderRadius: '100%',
            position: 'relative'
        },
        checkIcon: {
            fontSize: 40,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        crosWrap:{
          display:'flex',
          justifyContent:'flex-end'
        },
        crosWrap2:{
          display:'flex',
          justifyContent:'flex-start'
        },
        innerContainer: {
          padding: '0px 10px 10px 10px',
          maxHeight: 'calc(100vh - 100px)',
          overflow: 'auto'
        },
        btn: {
          borderRadius: 10,
          height:40,
          marginRight:10,
          width:100,
          fontWeight: 600,
        },
    };
});

const InviteUserModel = (props) => {
    const { 
      showModal, 
      setShowModal,
      userData,
      action,
      setAction,
      getAllUser,
      setLoader,
      setUserData
    } = props
    const { classes } = useStyles();

    const dispatch = useDispatch();
     
    
    const [Recordsddfdsdssssdss, setRecordsddfdsdssssdss] = useState([
    
    {
      columnName: "",
      columnTitle: "Name",
    },
  ]);
        
 
      const handleInputChange = (index, event) => {

        const { name, value } = event.target;
        const updatedInputSets = [...Recordsddfdsdssssdss];
        updatedInputSets[index][name] = value;
        setRecordsddfdsdssssdss(updatedInputSets);
      };
      const handleSubmit = (event) => {

        dispatch( createRecordsddfdsdssssdss({data:Recordsddfdsdssssdss}));
      };



  return (
    <div>
      <Modal
        open={showModal}
        onClose={()=>setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.mainContainer}>
        <div className={classes.crosWrap}>
        <IconButton  aria-label="upload picture" component="label" onClick={()=> {setShowModal(false)}}>
              <CancelIcon />      
            </IconButton>
            </div>
        <div className={classes.innerContainer}>    
        <form >
        <Grid  container  spacing={2} sx={{p:1}}>
        {Recordsddfdsdssssdss.map((inputSet, index) => ( <>
                <MUITextField          
              sm={6}
              label={`${inputSet.columnTitle}`}
              xs={6}
              name="columnName"
              value={inputSet.columnName}
              handleChange={(event) => handleInputChange(index, event)}
              variant='inner'
              id="columnName"
              placeholder=''
            />      
              </>))}
                 
            </Grid>
       
            <Grid item sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
            <Button
                  className={classes.btn}
                 variant="contained"
                 color="primary"
                 onClick={()=> {setShowModal(false)}}
                 style={{ marginTop: '20px' }}
               >
            Cancel
               </Button> 
            <Button
                  className={classes.btn}
                 variant="contained"
                 onClick={handleSubmit}
                 color="primary"
                 style={{ marginTop: '20px' }}
               >
               Save
               </Button> 
            </Grid>
            </form>
          </div>  
        </Box>
       
      </Modal>
    </div>
  );
};

export default InviteUserModel;