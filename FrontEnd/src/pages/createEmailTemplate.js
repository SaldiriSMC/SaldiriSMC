import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
// import ImageResize from "quill-image-resize-module-react";
import MUITextField from "../sharedComponents/textField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { emailTemplate } from "../Yup Schema";
import { createTemplate, updateTemplate } from "../actions/EmailTemplate";
import { Link, useNavigate } from "react-router-dom";
import he from "he"
import { loderTrue, loderFalse } from "../actions/Auth";
import { getTemplate } from "../actions/EmailTemplate";
const EmailTemplates = ({ isEdit, setIsEdit, itemId, setShowModal, itemData }) => {
  // Quill.register("modules/imageResize", ImageResize);
  const [value, setValue] = React.useState("");
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['blockquote'],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'},
       {'indent': '-1'}, {'indent': '+1'}],
       [{ 'script': 'sub'}, { 'script': 'super' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  const initialValues = {
    subject: "",
    body: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    values,
    errors,
    handleBlur,
    handleSubmit,
    touched,
    setFieldValue,
    setValues,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: emailTemplate,
    onSubmit: async (values, action) => {
      if (isEdit) {
        dispatch(
          updateTemplate(
            {
              ...values,
              // body: value,
              itemId: itemId
            },
          )
          )
      } else {
        dispatch(
          createTemplate({
            ...values,
            // body: value,
            navigate: navigate,
          }))
      }
      setShowModal(false)
    },
  });
  useEffect(() =>{
    if(isEdit){
      setValue(itemData.body)
      setValues({...values, ...itemData,})
    }
  },[itemData])
  return (
    <>
      {/* <NavBar /> */}
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-5">
          <MUITextField
            noTitle
            sm={3}
            id="subject"
            name="subject"
            placeholder="Enter Email Subject"
            value={values.subject}
            handleChange={handleChange}
            onBlur={handleBlur}
            errors={errors.subject}
            touched={touched.subject}
          />
        </div>
        <ReactQuill
          theme="snow"
          value={values.body}
          htmlValue={values.body}
          onChange={(value, delta, source, Editor)=>{
            console.log("value in edotor ",he.decode(he))
            setFieldValue("body",value)
          }}
          modules={modules}
          formats={formats}
          // bounds={".app"}
          placeholder="type someting"
        />
        <div className="d-flex justify-content-end my-5">
          <Button variant="contained" color="primary" type="submit">
            {isEdit ? "Save" : "Create Email Template"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default EmailTemplates;
