import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MUITable from "../sharedComponents/MUITable";
import { processedQueuesConfig, processingQueuesConfig } from "../configs/tableConfig";
import AddIcon from "@mui/icons-material/Add";
import { loderTrue, loderFalse } from "../actions/Auth";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  getRoll,
  createRoll,
  deleteRoll,
  updateRoll,
} from "../actions/AddRols";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Header from "../components/navBar";
import Footer from "../components/footer";
import SideMenu from "../pages/sideMenu";
import {
  getAllQueues,
} from "../service/users";
export default function Queues() {
  const theme = useTheme();
  const [queues, setQueues] = useState({})
  console.log('queues------->>>>>>>', queues)

  const dispatch = useDispatch();
  const rowsPerPageOptions = [5, 10, 25]; 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };





  const [filter, setFilter] = useState({
    pageNumber: 1,
    pageSize: 5,
    descending: true,
  });
  const [totalRecords, setTotalRecords] = useState(0);


  const [value, setValue] = React.useState("one");
  console.log(value)
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    setRowsPerPage(rowsPerPageOptions[0])
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const queues = await getAllQueues();
        setQueues(queues.data);
      
      } catch (error) {
        // Handle any error that occurred during the API call
        console.error('Error fetching queues:', error);
      }
    };
  
    fetchData(); // Call the fetchData function to fetch data when the component mounts
  }, []);
  

  useEffect(() => {
    if(value === "one"){
      setTotalRecords(queues?.data?.prcessingQueue?.length);
    } else{
      console.log("totalRecords----2222222222222222222---------->>>>>>>>>.",totalRecords)
      setTotalRecords(queues?.data?.processedQueue?.length);
    }

  }, [queues,value]);


console.log("totalRecords-------------->>>>>>>>>.",totalRecords)

  const normalizeTableProgram = (source, value) => {
    const result = [];
    if(value === "one"){
      source?.prcessingQueue?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .forEach((record, index) => {
        result.push({
          date: record.processedOn ? new Date(record.processedOn).toLocaleDateString() : "-",
          id: record?.id ? record?.id : "-",
          userId: record.data.id ? record.data.id : "-",
          processedOn: record.processedOn ? new Date(record.processedOn).toLocaleTimeString() : "-",

        });
      });
    }else{
      source?.processedQueue.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .forEach((record, index) => {
      result.push({
        date: record.processedOn ? new Date(record.processedOn).toLocaleDateString() : "-",
        id: record?.id ? record?.id : "-",
        userId: record.data.id ? record.data.id : "-",
        processedOn: record.processedOn ? new Date(record.processedOn).toLocaleTimeString() : "-",
        finishedOn: record.finishedOn ? new Date(record.finishedOn).toLocaleDateString() : "-",
      });
    });
    }
    return result;
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
    <>
      <Header />
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
            justifyContent="flex-end"
            alignItems="center"
            item
            sm={12}
            md={6}
          >
            <Tabs
              value={value}
              onChange={handleChangeTab}
              aria-label="wrapped label tabs example"
            >
              <Tab value="one" label="Processing Queue" wrapped />
              <Tab value="two" label="Processed Queue" />
            </Tabs>
            <br></br>
            <MUITable column={value === "one" ? processingQueuesConfig : processedQueuesConfig } list={normalizeTableProgram(queues?.data, value)} 
          pagination={{
              totalRecords: totalRecords,
              pageNumber: page,
              pageSize: rowsPerPage,
              onChangePageNumber: handleChangePage,
              onChangePageSize: handleChangeRowsPerPage,
              rowsPerPageOptions:rowsPerPageOptions
            }}
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
    </>
  );
}
