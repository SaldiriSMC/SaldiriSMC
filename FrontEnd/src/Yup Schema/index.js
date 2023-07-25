import * as Yup from "yup";


const noNumbersOrSpecialChars = (value) => {
  const regex = /^[a-zA-Z ]+$/; // Regular expression to allow only letters and spaces

  if (!regex.test(value)) {
    return false; // Return false if the value contains numbers or special characters
  }

  return true;
};

export const signupSchemaCompany = Yup.object({
  fullName: Yup.string()
  .test('no-numbers-or-special-chars', 'Full name should only contain letters and spaces', value =>
    noNumbersOrSpecialChars(value)
  )
    .min(3)
    .max(25)
    .required("Please enter your full name"),
    domain: Yup.string().test('no-numbers-or-special-chars', 'Domain name should only contain letters and spaces', value =>
    noNumbersOrSpecialChars(value)
  ).min(3).max(25).required("Please enter your domain name"),
    tanantName: Yup.string().test('no-numbers-or-special-chars', 'Comapny name should only contain letters and spaces', value =>
    noNumbersOrSpecialChars(value)
  ).min(3).max(25).required("Please enter your Comapny name"),
  allies: Yup.string().test('no-numbers-or-special-chars', 'Allies name should only contain letters and spaces', value =>
  noNumbersOrSpecialChars(value)
).min(3).max(25).required("Please enter your Allies"),
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
  fullName: Yup.string() .test('no-numbers-or-special-chars', 'Full name should only contain letters and spaces', value =>
  noNumbersOrSpecialChars(value)
)
    .min(3)
    .max(25)
    .required("Please enter your full name"),
  allies: Yup.string().test('no-numbers-or-special-chars', 'Full name should only contain letters and spaces', value =>
  noNumbersOrSpecialChars(value)
).min(3).max(25).required("Please enter your Allies"),
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

export const emailTemplate = Yup.object({
  subject: Yup.string().min(3).max(100).required("Please enter subject"),
});
export const rollStatusSechmea = Yup.object({
  modulesId: Yup.string().required("This field is required"),
  status: Yup.string().required("This field is required"),
});