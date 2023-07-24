import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import MUITable from "../sharedComponents/MUITable";
import { EmailTemplateConfig } from "../configs/tableConfig";
import { getTemplate } from "../actions/EmailTemplate";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmailTemplate } from "../service/users";
import { loderTrue, loderFalse } from "../actions/Auth";
import EmailTemplateEditModal from "../sharedComponents/emailTemplateEditModal"
import Grid from "@mui/material/Grid";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const EmailTemplate = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false)
  const [itemId, setItemId] = React.useState(null)
  const dispatch = useDispatch();
  const emailTemplateData = useSelector(
    (state) => state?.emailTemplate?.data?.data
  );
  useEffect(() => {
    dispatch(getTemplate());
  }, []);
  const normalizeTableProgram = (source) => {
    const result = [];
    if (source) {
      source.forEach((record, index) => {
        const created_date = record.createdAt.split("T")[0];
        result.push({
          created_date: created_date,
          subject: record?.subject,
          body: record?.body,
          action: {
            change: (val) => handleDropdownActionsupport(record, val, index),
          },
        });
      });
    }
    return result;
  };
  const handleDropdownActionsupport = (data, val, index) => {
    console.log("id----------->>>>>>>>", data.id);
    if (val === "delete") {
      setIsEdit(false)
      deleteEmailTemplate(data.id)
        .then((response) => {
          dispatch(getTemplate());
        })
        .catch((err) => console.log(err))
        .finally(() => loderFalse(true));
      //   setShowDeleteModal(true)
      //   setUserDeleteId(data?.id)
    }

    if (val === "edit") {
      setIsEdit(true)
      setShowModal(true);
      setItemId(data.id)
    }
  };
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
         <IconButton  size="medium" style={{backgroundColor:"#0075FF", color:"white",}} onClick={()=>{
            setShowModal(true)
          } }>
            <AddIcon />
          </IconButton> 
         </div>
         <MUITable
        column={EmailTemplateConfig}
        list={normalizeTableProgram(emailTemplateData)}
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
      
      <EmailTemplateEditModal showModal={showModal} setShowModal={setShowModal} isEdit={isEdit} setIsEdit={setIsEdit} itemId={itemId} /> 
    </div>
  );
};

export default EmailTemplate;
