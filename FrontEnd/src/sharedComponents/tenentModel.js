import { makeStyles } from "tss-react/mui";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import MUITextField from "../sharedComponents/textField";
import Grid from "@mui/material/Grid";
import CancelIcon from "@mui/icons-material/Cancel";
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
    setShowUpdateModal,
    showUpdateModal,
    handleUpdateModel,
    errors,
    handleBlur,
    touched,
    handleChange,
    values,
    id
  } = props;
  const { classes } = useStyles();


  
console.log(values,"values-----------",id)
  return (
    <div>
      <Modal
        open={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.mainContainer}>
          <div className={classes.crosWrap}>
            <IconButton
              aria-label="upload picture"
              component="label"
              onClick={() => setShowUpdateModal(false)}
            >
              <CancelIcon />
            </IconButton>
          </div>
          <div className={classes.innerContainer}>
          <MUITextField
               noTitle
              sm={6}
              xs={6}
              name={`${id}`}
              value={values}
              handleChange={handleChange}
              onBlur={handleBlur}
              id={`${id}`}
              placeholder='Full Name'
              errors={errors.id}
              touched={touched.id}
            /> 
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 3,
              }}
            >
              {" "}
              <Button
                className={classes.btn}
                variant="contained"
                onClick={() => {
                  handleUpdateModel();
                }}
                color="primary"
              >
                Update
              </Button>
            </Grid>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MainModal;