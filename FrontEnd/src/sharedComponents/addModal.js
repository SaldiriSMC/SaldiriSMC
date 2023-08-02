import { makeStyles } from "tss-react/mui";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { updateTime, getAttendanceByHours } from "../actions/Attendance";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";
const useStyles = makeStyles()((theme) => {
  return {
    mainContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      background: theme.palette.white.main,
      borderRadius: 24,
      padding: "10px 10px 10px 10px",
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        width: "300px",
      },
    },
    imgFullWidth: {
      width: "100%",
    },
    avatar: {
      width: 160,
      height: 160,
      position: "absolute",
      top: -90,
      left: 15,
      borderRadius: "100%",
      border: `4px solid red`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.primary.main,
      fontWeight: 700,
      fontSize: 18,
      marginRight: 15,
    },
    uploadFileBtn: {
      position: "absolute",
      bottom: 0,
      right: 0,
    },
    iconWrapper: {
      background: "rgba(0, 113, 188, 0.08)",
      width: 90,
      height: 90,
      margin: "0 auto 36px",
      borderRadius: "100%",
      position: "relative",
    },
    checkIcon: {
      fontSize: 40,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    crosWrap: {
      display: "flex",
      justifyContent: "flex-end",
    },
    crosWrap2: {
      display: "flex",
      justifyContent: "flex-start",
    },
    innerContainer: {
      padding: "0px 10px 10px 10px",
      maxHeight: "calc(100vh - 100px)",
      overflow: "auto",
    },
    btn: {
      borderRadius: 10,
      height: 40,
      marginRight: 10,
      width: 100,
      fontWeight: 600,
    },
  };
});

const MainModal = (props) => {
  const {
    showAddModal,
    setShowAddModal,
    userData,
    value,
    calculateTotalWorkedHours,
  } = props;
  const { classes } = useStyles();
  const initialValues = {
    timeIn: "",
    timeOut: "",
  };
  const timeScema = Yup.object({
    timeIn: Yup.string(),
    timeOut: Yup.string(),
  });
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    handleReset,
    errors,
    values,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: timeScema,
    onSubmit: () => {},
  });

  const dispatch = useDispatch();
  const updateTimeFun = () => {
    const totalHours = calculateTotalWorkedHours();
    var data = {
      time: [
        {
          ...values,
          attendanceid: userData?.attendenceid,
          totalHours: totalHours,
        },
      ],
    };
    dispatch(updateTime(data));
    setTimeout(() => {
      dispatch(getAttendanceByHours(value));
    }, 100);
    handleReset()
    setShowAddModal(false); 
  };
  return (
    <div>
      <Modal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.mainContainer}>
          <div className={classes.crosWrap}>
            <IconButton
              aria-label="upload picture"
              component="label"
              onClick={() => setShowAddModal(false)}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <div className={classes.innerContainer}>
            <div className="d-flex justify-center">
              <div className="d-flex flex-column col-sm-6 px-2">
                <label htmlFor="timeIn">Time In</label>
                <input
                  type="time"
                  onChange={handleChange}
                  value={values.timeIn}
                  name="timeIn"
                  id="timeIn"
                />
                {values.timeIn > values.timeOut && (
                  <div style={{ color: "red" }}>
                    Time Out is less then Time In{" "}
                  </div>
                )}
              </div>
              <div className="d-flex flex-column col-sm-6 px-2">
                <label htmlFor="timeOut">Time Out</label>
                <input
                  type="time"
                  onChange={handleChange}
                  value={values.timeOut}
                  name="timeOut"
                  id="timeOut"
                />
              </div>
            </div>
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                my: 3,
              }}
            >
              {" "}
              <Button
                className={classes.btn}
                variant="contained"
                onClick={() => {
                  updateTimeFun();
                }}
                color="primary"
              >
                Add
              </Button>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MainModal;