import React, { useEffect, useState } from "react";
import { pushNotification } from "../utils/notifications";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import MUITable from "../sharedComponents/MUITable";
import Box from "@mui/material/Box";
import SideMenu from "../pages/sideMenu";
import NavBar from "../components/navBar";
import CssBaseline from "@mui/material/CssBaseline";
import InviteUserModel from "../sharedComponents/inviteUserModel";
import { UserInviteConfig2 } from "../configs/tableConfig";
import "./comaon.css";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { loderTrue, loderFalse } from "../actions/Auth";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import MUISearchField from "../sharedComponents/searchField";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../sharedComponents/deleteModal";
import EmailIcon from "@mui/icons-material/Email";
import {
  deleteInviteUser,
  sandEmailInviteUser,
  getAllUserByDeptDes,
} from "../service/users";
const InviteUser = ({ setLoader }) => {
  const [deleteTimeInOut, setDeleteTimeInOut] = React.useState({ time: [] });
  const [isCreate, setIsCreate] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [userData, setUserData] = React.useState({});
  const [allUserList, setAllUserList] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [userDeleteId, setUserDeleteId] = React.useState(null);
  const [action, setAction] = React.useState(null);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("accessToken"));
  const logInUserId = user?.data?.user?.id;
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
    sortBy:'desc',
    columnName:'createdAt'
  });
  const initialValues = {
    search: '',
    valueStartDate: '',
    valueEndDate: '',
  };
  

  const { handleChange, handleSubmit, handleBlur,setFieldValue, handleReset, errors, values, touched,   setValues,
    dirty } =
    useFormik({
      initialValues,
      onSubmit: () => {

        
      },
    });
  const [totalRecords, setTotalRecords] = useState(0);
  useEffect(() => {
    getAllUser();
  }, [filter]);


  useEffect(() => {
    if (values.search.length >= 3 ){
      getAllUser();
    }
   
  }, [values.search]);




  console.log("filter------------>>>>>>>>>>>>",values)

  const getAllUser = () => {
    dispatch(loderTrue(true));
    getAllUserByDeptDes(filter,values)
      .then((response) => {
        if (response.data) {
          setAllUserList(response?.data?.data?.result);
          setTotalRecords(response?.data?.data?.totalResults)
        }
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        dispatch(loderFalse(true));
      });
  };

  const sandEmailsUser = () => {
    const objectsWithIds = allUserList.filter((obj) =>
      checkedValue.includes(obj.id)
    );

    // setLoader(true);
    sandEmailInviteUser({ users: objectsWithIds })
      .then((response) => {
        if (response.data) {
          pushNotification(`${response?.data?.message}`, "success");
        }
      })
      .catch((err) => {
        const { response } = err;
        // setLoader(false)
        pushNotification(`${response?.data?.message}`, "error");
      })
      .finally(() => {
        // setLoader(false);
      });
  };

  const handleDeleteModel = () => {
    // setLoader(true);
    deleteInviteUser(userDeleteId)
      .then((response) => {
        if (response.data) {
          getAllUser();
          setShowDeleteModal(false);
        }
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        // setLoader(false);
      });
  };

  const normalizeTableProgram = (source) => {
    const result = [];
    source.forEach((record, index) => {
      result.push({
        check: {
          checked: checkedValue,
          id: record.id,
          onchange: (check, id) => handleCheck(check, id),
          disabled:
            record.isSignedIn || (!record.isSignedIn && !record.is_token),
        },
        name: record?.name,
        designationName: record?.designationName,
        departmentname: record?.departmentname,
        invitation: record.isSignedIn || (!record.isSignedIn && !record.is_token) ? 'Send' : 'Pending',
        action: {
          change: (val) => handleDropdownActionsupport(record, val, index),
          hideDelete: record.id == logInUserId,
        },
      });
    });
    return result;
  };
  const handleDropdownActionsupport = (data, val, index) => {
    if (val === "delete") {
      setShowDeleteModal(true);
      setUserDeleteId(data?.id);
    }

    if (val === "edit") {
      setAction("update");
      setUserData(data);
      setShowModal(true);
    }
  };
  const handleCheck = (check, id) => {
    if (check) {
      setCheckedValue([...checkedValue, id]);
    } else {
      setCheckedValue(checkedValue?.filter((item) => item !== id));
    }
  };

  const selectedCheckValueHandler = (check) => {
    if (check) {
      setCheckedValue(
        allUserList
          .filter(
            (item) => !(item.isSignedIn || (!item.isSignedIn && !item.is_token))
          )
          .map((item) => item.id)
      );
    } else {
      setCheckedValue([]);
    }
  };


  const handlePageChange = (e, newPage) => {
    setFilter({
      ...filter,
      pageNumber: newPage + 1,
    });
  };

  const handlePageSizeChange = (e) => {
    setFilter({
      ...filter,
      pageNumber: 1,
      pageSize: e.target.value,
    });
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideMenu />
        <Grid
          container
          flexDirection="row"
          display="flex"
          justifyContent=""
          sx={{ p: 1 }}
        >
          <Grid
            sx={{ pl: 3 }}
            // justifyContent="flex-end"
            alignItems="center"
            item
            sm={12}
            md={6}
          >
            <div
              style={{
                display: "flex",
                // justifyContent: "flex-end",
                // alignItems:'center'
                // marginBottom: "15px",
              }}
            >
                <MUISearchField
              sm={12}
              xs={12}
              name="search"
              value={values.search}
              valueEndDate={values.endDate}
              valueStartDate={values.startDate}
              handleChange={handleChange}
              id="search"

            />
              <IconButton
                disabled={checkedValue.length < 1}
                sx={{ mr: 1 }}
                size="medium"
                style={{
                  height:40,
                  marginTop:20,
                  backgroundColor:
                    checkedValue.length < 1 ? "gray" : "#0075FF ",
                  color: "white",
                }}
                onClick={() => {
                  sandEmailsUser();
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                size="medium"
                style={{ backgroundColor: "#0075FF", color: "white",height:40 ,marginTop:20 }}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <AddIcon />
              </IconButton>
            </div>
          
            <MUITable
            setFilter={setFilter}
              onCheckAll={(val) => selectedCheckValueHandler(val)}
              checkedValue={
                checkedValue.length >= allUserList.length ? true : false
              }
              column={UserInviteConfig2}
              list={normalizeTableProgram(allUserList)}
              pagination={allUserList?.length > 0 ? (
                {
                  totalRecords: totalRecords,
                  pageNumber: filter.pageNumber - 1,
                  pageSize: filter.pageSize,
                  onChangePageNumber: handlePageChange,
                  onChangePageSize: handlePageSizeChange,
                }
              ) : null}
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
              <div
                style={{ display: "flex", justifyContent: "flex-end" }}
              ></div>
            </>
          </Grid>
        </Grid>
      </Box>

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
