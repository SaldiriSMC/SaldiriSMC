import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import MUITable from "../sharedComponents/MUITable";
import { EmailTemplateConfig } from "../configs/tableConfig";
import { getTemplate } from "../actions/EmailTemplate";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmailTemplate } from "../service/users";
import { loderTrue, loderFalse } from "../actions/Auth";
import EmailTemplateEditModal from "../sharedComponents/emailTemplateEditModal"
const EmailTemplate = () => {
  const [showModal, setShowModal] = React.useState(false);
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
      //   setAction('update')
      //   setUserData(data)
      setShowModal(true);
    }
  };
  return (
    <div>
      <NavBar />
      <MUITable
        column={EmailTemplateConfig}
        list={normalizeTableProgram(emailTemplateData)}
      />
      <EmailTemplateEditModal showModal={showModal} setShowModal={setShowModal} isEdit={true} />
    </div>
  );
};

export default EmailTemplate;
