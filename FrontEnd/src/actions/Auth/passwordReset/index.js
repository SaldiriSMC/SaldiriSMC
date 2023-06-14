import {
    EMAILVERIFICATION,
    EMAILVERIFICATION_SUCCESS,
    EMAILVERIFICATION_FAILURE,
    RESETPASSWORD,
    RESETPASSWORD_SUCCESS,
    RESETPASSWORD_FAILURE,
    EMAILSTATUS,
    EMAILSTATUS_SUCCESS,
    EMAILSTATUS_FAILURE
} from "./actionTypes"


// Email verification functions
export const emailVerification = (data) => ( {
    type: EMAILVERIFICATION,
    payload: data,
});

export const emailVerificationSuccess = (data) => ( {
  type: EMAILVERIFICATION_SUCCESS,
  payload: data,
});

export const emailVerificationFailure = (data) => ( {
  type: EMAILVERIFICATION_FAILURE,
  payload: data,
});

export const resetPassword = (data) => ( {
  type: RESETPASSWORD,
  payload: data,
});

export const resetPasswordSuccess = (data) => ( {
type: RESETPASSWORD_SUCCESS,
payload: data,
});

export const resetPasswordFailure = (data) => ( {
type: RESETPASSWORD_FAILURE,
payload: data,
});

export const emailStatus = (data) => ( {
  type: EMAILSTATUS,
  payload: data,
});

export const emailStatusSuccess = (data) => ( {
type: EMAILSTATUS_SUCCESS,
payload: data,
});

export const emailStatusFailure = (data) => ( {
type: EMAILSTATUS_FAILURE,
payload: data,
});
