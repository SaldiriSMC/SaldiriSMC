import React, { useEffect,useState } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import NavBar from "../components/navBar"
import InviteUserModel from "../sharedComponents/inviteUserModel";
import Table from "../sharedComponents/table";
import { UserInviteConfig } from "../configs/tableConfig";
import "./comaon.css";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import EmailIcon from '@mui/icons-material/Email';
import { getAllUser, getAttendanceByHours } from "../actions/Attendance";
const InviteUser = () => {
  const [deleteTimeInOut, setDeleteTimeInOut] = React.useState({ time: [] });
  const [isCreate, setIsCreate] = React.useState(false)
  const [showModal,setShowModal] = React.useState(false)
  const [userData,setUserData] = React.useState({})
  const data = useSelector((state) => state.attendance?.allUsers?.data);
  const workedHours = useSelector(
    (state) => state?.attendance?.attendance?.data
  );  

  const [checkedValue, setCheckedValue] = useState([])

  const dispatch = useDispatch();



  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
        check: {
          checked: checkedValue,
          id: record.id,
          onchange: (check, id) => handleCheck(check, id)
        },
        name: record?.name,
        designation: record?.designation,
        department: record?.department,
        action: {
          change: (val) =>
          handleDropdownActionsupport(record, val,index),
        },
      });
    });
    return result;
  };
  const handleDropdownActionsupport= (data, val,index) => {

    if (val === 'delete' ) {
     
    }  if (val === 'edit' ) {
      setShowModal(true)
    }

  }
  const handleCheck = (check, id) => {
    if (check) {
      // setCheckedValue([
      //   ...checkedValue,
      //   id,
      // ])
    } else {
      // setCheckedValue(checkedValue?.filter(item => item !== id))
    }
  }

  const selectedCheckValueHandler = (check) => {
    if (check) {
    } else {
      setCheckedValue([])
    }
  }
  const dumyData =[{name:'Ali',designation:'Senier',department:'Frontend'},{name:'Abdullah',designation:'Junier',department:'Backend'},{name:'Hassan',designation:'Senier',department:'Frontend'}]
  return (
    <div>
         <NavBar />
      <Grid
        container
        flexDirection="row"
        display="flex"
        justifyContent=""
        sx={{ p: 1 }}
      >
        <Grid
          sx={{ pl: 3 }}
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          item
          sm={12}
          md={6}
        >
         <div style={{display:"flex", justifyContent:"flex-end", marginBottom:"15px"}}>
         <IconButton disabled sx={{mr:1}} size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{

          } }>
            <EmailIcon />
          </IconButton> 
         <IconButton  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{
            setShowModal(true)
         
          } }>
            <AddIcon />
          </IconButton> 
         </div>
         <MUITable
             onCheckAll={(val) => selectedCheckValueHandler(val)}
             checkedValue={false}
            column={UserInviteConfig}
            list={normalizeTableProgram(dumyData)}

          />
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              my: 3,
            }}
          ></Grid>
        </Grid>
        <Grid
          item
          spacing={2}
          justifyContent="center"
          alignContent="flex-start"
          alignItems="start"
          container
          md={6}
          sm={12}
        >
          <>
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
          </>
        </Grid>
      </Grid>
      <InviteUserModel
        showModal={showModal}
        userData={userData}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default InviteUser;
