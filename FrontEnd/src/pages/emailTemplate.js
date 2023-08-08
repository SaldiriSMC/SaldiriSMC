import React, { useEffect,useState } from "react";
import Box from "@mui/material/Box";
import SideMenu from '../pages/sideMenu'
import NavBar from "../components/navBar"
import CssBaseline from '@mui/material/CssBaseline';
import MUITable from "../sharedComponents/MUITable";
import { EmailTemplateConfig } from "../configs/tableConfig";
import { getTemplate, deleteTemplate } from "../actions/EmailTemplate";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmailTemplate } from "../service/users";
import { loderTrue, loderFalse } from "../actions/Auth";
import EmailTemplateEditModal from "../sharedComponents/emailTemplateEditModal"
import Grid from "@mui/material/Grid";
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteModal from "../sharedComponents/deleteModal"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import he from "he"

const EmailTemplate = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false)
  const [itemId, setItemId] = React.useState(null)
  const [itemData, setItemData] = React.useState({})
  const dispatch = useDispatch();
  const emailTemplateData = useSelector(
    (state) => state?.emailTemplate?.data?.data
  );
  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
  });
  const [totalRecords, setTotalRecords] = useState(0);
  const isLoading = useSelector((state) => state?.emailTemplate?.getListLoading)

  useEffect(() => {
    if(!isLoading){
      dispatch(getTemplate(filter));
    }
  }, [isLoading,filter]);
  const handleDeleteModel = ()=>{
    dispatch(deleteTemplate({itemId:itemId}))
    setShowDeleteModal(false)
  }
  const normalizeTableProgram = (source) => {
    const result = [];
    if (source?.length > 0) {
      source.forEach((record, index) => {
        const created_date = record.createdAt?.split("T")[0];
        result.push({
          created_date: created_date,
          subject: record?.subject,
          body:{
            body: record?.body?ReactHtmlParser(he.decode(record?.body)):"",
            hideTooltip:true
          },
          action: {
            change: (val) => handleDropdownActionsupport(record, val, index),
            hideDelteEdit:record?.tenantId == null ? true : false,
          },
        });
      });
    }
    return result;
  };
  const handleDropdownActionsupport = (data, val, index) => {
    if (val === "delete") {
      setItemId(data.id)
      setShowDeleteModal(true)
    }
    if (val === "edit") {
      setIsEdit(true)
      setShowModal(true);
      setItemId(data.id)
      setItemData(data)
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
      <Box sx={{ display: 'flex' }}>
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
            <AddIcon onClick={()=>{
             setShowModal(true)
             setIsEdit(false)}} />
          </IconButton> 
         </div>
         <MUITable
        column={EmailTemplateConfig}
        list={normalizeTableProgram(emailTemplateData?.results ?? [])}
        pagination={emailTemplateData?.results?.length > 0 ? (
          {
            totalRecords: emailTemplateData?.totalResults,
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
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
          </>
        </Grid>
      </Grid>
    </Box>
      
      
      <EmailTemplateEditModal showModal={showModal} setShowModal={setShowModal} isEdit={isEdit} setIsEdit={setIsEdit} itemId={itemId} itemData={itemData} />
      <DeleteModal showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} handleDeleteModel={handleDeleteModel} /> 
    </div>
  );
};

export default EmailTemplate;
