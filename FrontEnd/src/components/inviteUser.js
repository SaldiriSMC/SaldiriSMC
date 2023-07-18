import React, { useEffect,useState } from "react";
import { pushNotification } from "../utils/notifications";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import NavBar from "../components/navBar"
import InviteUserModel from "../sharedComponents/inviteUserModel";
import { UserInviteConfig } from "../configs/tableConfig";
import "./comaon.css";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../sharedComponents/deleteModal";
import EmailIcon from '@mui/icons-material/Email';
import {
  deleteInviteUser,
  sandEmailInviteUser,
  getAllUserByDeptDes
} from "../service/users";
const InviteUser = ({loader,setLoader}) => {
  const [deleteTimeInOut, setDeleteTimeInOut] = React.useState({ time: [] });
  const [isCreate, setIsCreate] = React.useState(false)
  const [showModal,setShowModal] = React.useState(false)
  const [userData,setUserData] = React.useState({})
  const [allUserList, setAllUserList] = useState([])
  const [checkedValue, setCheckedValue] = useState([])
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const [action, setAction] = React.useState(null);
  const dispatch = useDispatch();

console.log("---------loader-----------",loader)
useEffect(()=>{
  getAllUser()
},[])


  const getAllUser=()=>{
    setLoader(true);
    getAllUserByDeptDes()
    .then((response) => {
      if (response.data) {
        setAllUserList(response.data.data)
      }
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
      setLoader(false);

  });

  }

  const sandEmailsUser=()=>{

    const objectsWithIds = allUserList.filter(obj => checkedValue.includes(obj.id));
    
    setLoader(true);
    sandEmailInviteUser({users:objectsWithIds})
    .then((response) => {
      if (response.data) {
        pushNotification(
          `${response?.data?.message}`,
          "success",
        );
      }
    })
    .catch((err) => {
      const { response } = err;
      setLoader(false)
      pushNotification(
        `${response?.data?.message}`,
        "error",
      );
    })
    .finally(() => {
      setLoader(false);
  });

  }

  const handleDeleteModel = () => {
    setLoader(true);
    deleteInviteUser(userDeleteId)
    .then((response) => {
      if (response.data) {
        getAllUser()
        setShowDeleteModal(false)
      }
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
      setLoader(false);

  });
  }


  const normalizeTableProgram= (source) => {
    const result = [];
    source.forEach((record,index) => {
      result.push({
        check: {
          checked: checkedValue,
          id: record.id,
          onchange: (check, id) => handleCheck(check, id),
          // disabled:((record.isSIgnin) || (!record.isSignin && ! record.isToken))

        },
        name: record?.name,
        designation: record?.designationName,
        department: record?.departmentname,
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
      setShowDeleteModal(true)
      setUserDeleteId(data?.id)
     
    }  if (val === 'edit' ) {
      setAction('update')
      setUserData(data)
      setShowModal(true)
    }

  }
  const handleCheck = (check, id) => {
    if (check) {
      setCheckedValue([
        ...checkedValue,
        id,
      ])
    } else {
      setCheckedValue(checkedValue?.filter(item => item !== id))
    }
  }

  const selectedCheckValueHandler = (check) => {
    if (check) {
      setCheckedValue(allUserList.map(item => item.id))
    } else {
      setCheckedValue([])
    }
  }

  console.log("checkedValue----------",checkedValue)
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
         <IconButton disabled={checkedValue.length<1} sx={{mr:1}} size="medium" style={{backgroundColor:checkedValue.length<1 ?"gray" : '#0075FF ', color:"white",}} onClick={()=>{
sandEmailsUser()
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
             checkedValue={checkedValue.length >= allUserList.length ? true : false}
            column={UserInviteConfig}
            list={normalizeTableProgram(allUserList)}

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
        setLoader={setLoader}
        userData={userData}
        setUserData={setUserData}
        setShowModal={setShowModal}
        getAllUser={getAllUser}
        action={action}
        setAction={setAction}
      />
       <DeleteModal
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        handleDeleteModel={handleDeleteModel}

      />
    </div>
  );
};

export default InviteUser;
