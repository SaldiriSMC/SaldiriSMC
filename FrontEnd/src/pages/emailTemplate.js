import React from 'react'
import NavBar from "../components/navBar"
import MUITable from "../sharedComponents/MUITable";
import { EmailTemplateConfig } from "../configs/tableConfig";
const EmailTemplate = () => {
    const normalizeTableProgram= (source) => {
        const result = [];
        source.forEach((record,index) => {
          result.push({
            name: record?.name,
            designation: record?.designationName,
            department: record?.departmentname,
            action: {
              change: (val) =>
              handleDropdownActionsupport(record, val,index),
            },
          });
        });
        return result;
      };
      const handleDropdownActionsupport= (data, val,index) => {
    
        if (val === 'delete' ) {
        //   setShowDeleteModal(true)
        //   setUserDeleteId(data?.id)
         
        }  
        
        if (val === 'edit' ) {
        //   setAction('update')
        //   setUserData(data)
        //   setShowModal(true)
        }
    
      }
  return (
    <div>
     <NavBar />
     <MUITable
            column={EmailTemplateConfig}
            list={normalizeTableProgram([])}

          />
    </div>
  )
}

export default EmailTemplate
