import axios from 'axios'
import URls from "../constants/urls";
import apiWithToken from "../service/apiWithToken";
import {headerWithToken} from "../service/apiWithTokenLookUp";
const instance = axios.create()
console.log("URls.getAllUsers----------",URls.getAllUsers)
export const getAllDepartment = () => {
    return instance({
        url: URls.getDepartment,
        method: 'get',
        ...headerWithToken
    })
}
export const getAllDesignation = () => {
    return instance({
        url: URls.getDesignation,
        method: 'get',
        ...headerWithToken
    })
}
export const getAllUserByDeptDes = () => {
    return instance({
        url: URls.getUserDepartmentDesignation,
        method: 'get',
        ...headerWithToken
    })
}
export const createInviteUser = (payload) => {
        return instance({
        url: URls.getUserDepartmentDesignation,
        method: 'post',
        data: payload,
        ...headerWithToken
    })
}
export const deleteInviteUser = (id) => {
        return instance({
        url: `${URls.user}/${id}`,
        method: 'DELETE',
        ...headerWithToken
    })
}

export const updateInviteUser = (payload,id) => {
    return instance({
    url: `${URls.user}/${id}`,
    method: 'patch',
    data: payload,
    ...headerWithToken
})
}
export const sandEmailInviteUser = (payload) => {
    return instance({
    url: URls.sandUsersEmails,
    method: 'post',
    data: payload,
    ...headerWithToken
})
}
export const userTokenExpire = (payload) => {
    return instance({
    url: URls.tokenRefrash,
    method: 'post',
    data: payload,
    ...headerWithToken
})
}


export const createAttendance = (payload) => {
    return instance({
    url: `${URls.attendanceAdjustment}/${payload.attendanceId}`,
    method: 'post',
    data: payload,
    ...headerWithToken
})
}


export const deleteAttendance = (payload) => {
    return instance({
    url: `${URls.attendanceAdjustment}/${payload.attendanceId}`,
    method: 'DELETE',
    data: payload,
    ...headerWithToken
})
}

export const updateAttendance = (payload) => {
return instance({
    url: `${URls.attendanceAdjustment}/${payload.attendanceId}`,
method: 'put',
data: payload,
...headerWithToken
})
}