import axios from 'axios'
import URls from "../constants/urls";
import apiWithToken from "../service/apiWithToken";
import {headerWithToken} from "../service/apiWithTokenLookUp";
const instance = axios.create()
export const getAllDepartment = () => {
    return instance({
        url: `${URls.getDepartment}?limit=10000&page=1`,
        method: 'get',
        ...headerWithToken
    })
}
export const getAllDesignation = () => {
    return instance({
        url: `${URls.getDesignation}?limit=10000&page=1`,
        method: 'get',
        ...headerWithToken
    })
}
export const getAllUserByDeptDes = (payload) => {
    return instance({
        url:  `${URls.getUserDepartmentDesignation}?limit=${payload?.pageSize}&page=${payload?.pageNumber}`,
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
export const getAllModules = () => {
    return instance({
        url: URls.modules,
        method: 'get',
        ...headerWithToken
    })
}

export const checkUserStatus = (payload) => {
    return instance({
        url: URls.userLogInStatus,
        method: 'post',
        data: payload,
        ...headerWithToken
    })
}

export const getAllQueues = () => {
    return instance({
        url: URls.getQueues,
        method: 'get',
        ...headerWithToken
    })
}
export const getAllPrimaryKey = () => {
    return instance({
        url: `${URls.table_url}`,
        method: 'get',
        ...headerWithToken
    })
}
export const addTable = (payload,onProgress) => {
    return instance({
        url: `${URls.table_url}`,
        method: 'post',
        data: payload,
        onUploadProgress: (progressEvent) => {
          const percentage = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
          console.log("percentage----------percentage",percentage)
          onProgress(percentage);
        },
        ...headerWithToken,
      });
}
export const getAllTableList = () => {
    return instance({
        url: `${URls.self_table_url}`,
        method: 'get',
        ...headerWithToken
    })
}