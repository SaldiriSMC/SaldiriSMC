
import MUITextField from "/sharedComponents/textField";
import RadioButtonsGroup from "/sharedComponents/radioButton";
import CheckBoxButtonsGroup from "/sharedComponents/checkboxButton";
import BasicDatePicker from "/sharedComponents/datePicker";
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'), { ssr: false})
import 'react-quill/dist/quill.snow.css'
import { Typography } from "@mui/material";

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


const  getTextField=(type,multine,title,options,disabled,value,handleChange,id,bllur,setTouched,useRichText)=>{
  // if(type=="text" && handleChange && value.length>0){
  //   handleChange(EditorState.createEmpty())
  // }

    return type=="shorttext"?(
      <>
       <MUITextField
                      sm={12}
                      xs={12}
                      id={id}
                      name={id}
                      label={title}
                      value={value}
                      variant="inner"
                      handleBlur={bllur}
                      multiline={false}
                      rows={1}
                      handleChange={handleChange}
                      setTouched={setTouched}
                      type={"text"}
                      readOnly={disabled}
                      options={options}
                      // options={purposeVisitList}
                      pass="name-value"
                    />
   
      </>
    ): type=="text" && useRichText?(
      <>
        <label class="MuiFormLabel-root MuiFormLabel-colorPrimary mui-style-1xqndyt-MuiFormLabel-root-label">{title}</label>
        <ReactQuill
          theme='snow'
          value={value}
          modules={!disabled?{toolbar:false}:modules}
          formats={formats}
          readOnly={!disabled}
          bounds={'.app'}
          onChange={(value,delta,source,editor)=>{
            // console.log("vuurenct bvalue ",value)
            handleChange(id,value)

          }}
          onBlur={bllur}

          style={{minHeight: '20vh'}}
      
        />
      </>
    ):(
      <>
       <MUITextField
                      sm={12}
                      xs={12}
                      id={id}
                      name={id}
                      label={title}
                      value={value}
                      variant="inner"
                      handleBlur={bllur}
                      multiline={multine}
                      rows={multine?4:1}
                      handleChange={handleChange}
                      setTouched={setTouched}
                      type={type}
                      readOnly={disabled}
                      options={options}
                      // options={purposeVisitList}
                      pass="name-value"
                    />
      </>
    )
  }
  const getRadioField=(type,multine,title,options,disabled,value,handleChange,id,setTouched)=>{
    return (
      <>
        <RadioButtonsGroup
          sm={12}
          xs={12}
          id={id}
          name={id}
          label={title}
          disabled={disabled}
          value={value}
          setFieldValue={handleChange}
          setTouched={setTouched}
          options={options}
        />
      </>
    )
  }
  const getCheckField=(type,multine,title,options,disabled,value,handleChange,id,setTouched)=>{
    return (
      <>
        <CheckBoxButtonsGroup
          sm={12}
          xs={12}
          id={id}
          name={id}
          label={title}
          disabled={disabled}
          value={value}
          setFieldValue={handleChange}
          setTouched={setTouched}
          options={options}
        />
      </>
    )
  }
  const getDateField=(type,multine,title,options,disabled,value,handleChange,id,setTouched)=>{
    return (
      <>
        <BasicDatePicker
          sm={12}
          xs={12}
          id={id}
          name={id}
          label={title}
          readOnly={disabled}
          value={value}
          setFieldValue={handleChange}
          setTouched={setTouched}
          dateFormat="yyyy-MM-dd"
          />
      </>
    )
  }

  export const getUIPage=(type,multine,title,options,dis,value,handleChange,id,onBlur,setTouched,useRichText)=>{
    // console.log("i am in add page ===>> ",fields)
    options.map((item,index)=>{
      if(!options[index].value && options[index].id){

        options[index].value=options[index].label

      }
    })
    if(type=="text" || type=="dropdown" || type=="number" || type=="shorttext"){
      return getTextField(type=="dropdown"?'select':type,multine,title,options,dis,value,handleChange,id,onBlur,setTouched,useRichText)

    }
    else if(type=="radio" ){
        return getRadioField(type,multine,title,options,dis,value,handleChange,id,setTouched)

    }
    else if(type=="checkbox" ){
        return getCheckField(type,multine,title,options,dis,value,handleChange,id,setTouched)

    }
    else if(type=="date"){
        return getDateField(type,multine,title,options,dis,value,handleChange,id,setTouched)
    }
  }

  
export const forms = {
    "draggable_forms1":{
       
      field_type:'SHORTTEXT',
      field_title:"Open Answer(Short)",
      optionsList:[],
      multiline:false,
      default_value:"",
    },
    "draggable_forms2":{
  
      field_type:'TEXT',
      field_title:"Open Answer(Long)",
      optionsList:[],
      multiline:true,
      default_value:"",
    },
    "draggable_forms3":{
       
      field_type:'CHECKBOX',
      field_title:"Multiple Choice(Checkbox)",
        optionsList:[{value:"1",label:"a",checked:false,},{value:"2",label:"b",checked:false,},{value:"3",label:"c",checked:false,},],
        multiline:false,
        default_value:"",
    },
    "draggable_forms4":{
      
      field_type:'RADIO',
      field_title:"Single Choice",
        optionsList:[{value:"1",label:"a"},{value:"2",label:"b"},{value:"3",label:"c"},],
        multiline:false,
        default_value:"",
      },
    "draggable_forms5":{
      
      field_type:'DATE',
      field_title:"Date",
        optionsList:[],
        multiline:false,
        default_value:"",
    },
    "draggable_forms6":{

      field_type:'NUMBER',
      field_title:"Number",
        optionsList:[],
        multiline:false,
        default_value:"",
    },
    "draggable_forms7":{
     
      field_type:'DROPDOWN',
      field_title:"Dropdown",
        optionsList:[{value:"1",label:"a"},{value:"2",label:"b"},{value:"3",label:"c"},],
        multiline:false,
        default_value:"",
    },

};

export const SOAP = [
 {
     
      type:'text',
      title:"Subjective",
      options:[],
      multiline:true,
      defaultValue:"",
  },
 {

      type:'text',
      title:"Review of Systems",
      options:[],
      multiline:true,
      defaultValue:"",
  },
  {

    type:'text',
    title:"Objective",
    options:[],
    multiline:true,
    defaultValue:"",
  },
  {
    type:'select',
    title:"Diagnosis",
    options:[
      {
        "value":"Intestinal Disease",
        "label":"Intestinal Disease"
      },
      {
        "value":"Tuberculosis",
        "label":"Tuberculosis"
      },
    ],
    multiline:false,
    defaultValue:"",
  },
  {

    type:'text',
    title:"Intestinal Disease",
    options:[],
    multiline:true,
    defaultValue:"",
  },
  {

    type:'text',
    title:"Tuberculosis",
    options:[],
    multiline:true,
    defaultValue:"",
  },
  {

    type:'text',
    title:"CorePlan",
    options:[],
    multiline:true,
    defaultValue:"",
  },
  

];