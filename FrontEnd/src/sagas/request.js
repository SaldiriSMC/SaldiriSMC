import api from "../service/api";
import apiWithToken from "../service/apiWithToken";
import apiwithTokenTenant from "../service/apiwithTokenTenant";
export const getRequest = async (requestUrl) =>
      apiWithToken
    .get(requestUrl)
    .then((resp) => resp)
    .catch((error) => error.response);
export const getRequestWithTenant = async (requestUrl) =>
    apiwithTokenTenant
    .get(requestUrl)
    .then((resp) => resp)
    .catch((error) => error.response);
export const getRequestWithOutToken = async (requestUrl) =>
      api
    .get(requestUrl)
    .then((resp) => resp)
    .catch((error) => error.response);

export const postRequestWithTenat = async (requestUrl, data) =>
  api
    .post(requestUrl, data)
    .then((resp) => resp)
    .catch((error) => error.response);
export const postRequest = async (requestUrl, data) =>
  api
    .post(requestUrl, data)
    .then((resp) => resp)
    .catch((error) => error.response);

export const patchRequest = async (requestUrl, data) =>
  api
    .patch(requestUrl, data)
    .then((resp) => resp)
    .catch((error) => error.response);

export const putRequestWithTenant = async (requestUrl, data) =>
  apiwithTokenTenant
            .put(requestUrl, data)
            .then((resp) => resp)
            .catch((error) => error.response);
export const postFormDataRequest = async (requestUrl, data) => {
  const formData = new FormData();
  Object.keys(data).map((item) => formData.set(item, data[item]));
  return api
    .post(requestUrl, formData)
    .then((resp) => resp)
    .catch((error) => error.response);
};
