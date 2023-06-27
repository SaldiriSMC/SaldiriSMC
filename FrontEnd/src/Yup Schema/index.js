import * as Yup from "yup";

export const signupSchemaCompany = Yup.object({
  fullName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your full name"),
    domain: Yup.string().min(3).max(25).required("Please enter your domain name"),
    tanantName: Yup.string().min(3).max(25).required("Please enter your Comapny name"),
  allies: Yup.string().min(3).max(25).required("Please enter your Allies"),
  designation: Yup.string().min(2).max(25).required("Please enter your designation"),
  password: Yup.string().min(8).required("Please enter your password")
  .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'Password must contain at least 1 letter and 1 number'),
  confirmPassword: Yup.string()
    .required('Confrim Password is required')
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const chnagePasswordSechmea = Yup.object({
  password: Yup.string().min(8).required("Please enter your password")
  .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'Password must contain at least 1 letter and 1 number'),
  confirmPassword: Yup.string()
    .required('Confrim Password is required')
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const signupSchemaUser = Yup.object({
  fullName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your full name"),
  allies: Yup.string().min(3).max(25).required("Please enter your Allies"),
  designation: Yup.string().min(2).max(25).required("Please enter your designation"),
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required('Confrim Password is required')
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginSchema = Yup.object({
  password: Yup.string().required("Please enter your password"),
});

export const setNewPassword = Yup.object({
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required('Confrim Password is required')
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
