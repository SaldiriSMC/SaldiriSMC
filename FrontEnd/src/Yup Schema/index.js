import * as Yup from "yup";

export const signupSchema = Yup.object({
  firstName: Yup.string()
    .min(3)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(3).max(25).required("Please enter your last name"),
  phone:Yup.number().typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .required('A phone number is required'),
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required('Confrim Password is required')
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const loginSchema = Yup.object({
  password: Yup.string().min(8).required("Please enter your password"),
});

export const setNewPassword = Yup.object({
  password: Yup.string().min(8).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required('Confrim Password is required')
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
