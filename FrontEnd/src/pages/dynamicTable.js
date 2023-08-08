import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { styled, useTheme } from "@mui/material/styles";
import MUITextField from "../sharedComponents/textField";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/navBar";
import Footer from "../components/footer";
import SideMenu from "../pages/sideMenu";
import { useFormik } from "formik";
export default function DynamicTable() {
  const theme = useTheme();
  const initialValues = {
    name: "",
  };
  const dispatch = useDispatch();
  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: initialValues,

 
      onSubmit: async (values, action) => {
    
      },
    });












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
          spacing={2}
        >         
          <MUITextField
              noTitle
              sm={3}
              label='Table Name'
              xs={12}
              id="name"
              name="name"
              placeholder='Name'
              value={values.name}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            /> 
            <Grid item sm={9}></Grid>
            <MUITextField
              noTitle
              sm={3}
              label='Table Name'
              xs={12}
              id="name"
              name="name"
              placeholder='Name'
              value={values.name}
              handleChange={handleChange}
              onBlur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            /> 
            </Grid>
      </Box>
    </>
  );
}
