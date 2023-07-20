import React from 'react'
import NavBar from "../components/navBar"
import ReactQuill,  { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
import MUITextField from "../sharedComponents/textField";
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { emailTemplate } from "../Yup Schema";
import { createTemplate } from '../actions/EmailTemplate'
import { Link, useNavigate } from "react-router-dom";
const EmailTemplates = ({isEdit}) => {
  Quill.register('modules/imageResize', ImageResize);
  const [value, setValue] = React.useState('');
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        {
          color: ["red", "blue", "yellow", "green", "gray", "pink", "navyblue"],
        },
      ],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' }
      ],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    }
  };
  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color'
  ];
  const initialValues = {
    subject: "",
    body:""
  };
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { values, errors, handleBlur, handleSubmit, touched, setFieldValue, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: emailTemplate,
      onSubmit: async (values, action) => {
        if(isEdit){
          
        }else{
          dispatch(
            createTemplate({
              ...values, body: value, navigate:navigate
            })
          );
        }
      },
    });
  return (
    <>
    {/* <NavBar /> */}
    <form action="" onSubmit={handleSubmit}>
    <div className='mb-5'>
    <MUITextField
      noTitle
      sm={3}
      id="subject"
      name="subject"
      placeholder='Enter Email Subject'
      value={values.subject}
      handleChange={handleChange}
      onBlur={handleBlur}
      errors={errors.subject}
      touched={touched.subject}
    /> 
    </div>
    <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue}
        modules={modules}
        formats={formats}
        bounds={'#root'}
        placeholder="type someting"
        
     />
     <div className='d-flex justify-content-end my-5'>
     <Button
      variant="contained"
      color="primary"
      type='submit'
      >
      {isEdit ? "Save" : "Create Email Template"}
    </Button>
     </div>
    </form>
    </>
  )
}

export default EmailTemplates
