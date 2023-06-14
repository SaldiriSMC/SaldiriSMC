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
} from "../actions/Auth/passwordReset/actionTypes"

const initialState = {
    getListLoading: false,
    data: null,
};
const getEmailVerification = (state, action) => ({
    ...state,
    getListLoading: true,
});

const getEmailVerificationSuccess = (state, action) => {
    return {
        ...state,
        getListLoading: false,
        dataEmailVerification: action.payload,
    };
};

const getEmailVerificationFailure = (state, action) => {
    return {
        ...state,
        getListLoading: false,
        dataEmailVerification: [],
    };
};

const getRestPassword = (state, action) => ({
    ...state,
    getListLoading: true,
});

const getRestPasswordSuccess = (state, action) => {
    return {
        ...state,
        getListLoading: false,
        dataResetPassword: action.payload,
    };
};

const getRestPasswordFailure = (state, action) => {
    return {
        ...state,
        getListLoading: false,
        dataResetPassword: [],
    };
};

const getEmailStatus = (state, action) => ({
    ...state,
    getListLoading: true,
});

const getEmailStatusSuccess = (state, action) => {
    return {
        ...state,
        getListLoading: false,
        dataEmailStatus: action.payload,
    };
};

const getEmailStatusFailure = (state, action) => {
    return {
        ...state,
        getListLoading: false,
        dataEmailStatus: [],
    };
};






const resetPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMAILVERIFICATION:
            return getEmailVerification(state, action);
        case EMAILVERIFICATION_SUCCESS:
            return getEmailVerificationSuccess(state, action);
        case EMAILVERIFICATION_FAILURE:
            return getEmailVerificationFailure(state, action);
        case RESETPASSWORD:
            return getRestPassword(state, action);
        case RESETPASSWORD_SUCCESS:
            return getRestPasswordSuccess(state, action);
        case RESETPASSWORD_FAILURE:
            return getRestPasswordFailure(state, action)
        case EMAILSTATUS:
            return getEmailStatus(state, action);
        case EMAILSTATUS_SUCCESS:
            return getEmailStatusSuccess(state, action);
        case EMAILSTATUS_FAILURE:
            return getEmailStatusFailure(state, action)
        default:
            return state;
    }

}

export default resetPasswordReducer