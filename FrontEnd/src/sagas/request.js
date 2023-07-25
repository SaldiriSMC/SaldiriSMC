import api from "../service/api";
import apiWithToken from "../service/apiWithToken";
import apiwithTokenTenant from "../service/apiwithTokenTenant";
// export const getRequest = async (requestUrl) =>
//       apiWithToken
//     .get(requestUrl)
//     .then((resp) => resp)
//     .catch((error) => error.response);
// export const getRequestWithTenant = async (requestUrl) =>
//     apiwithTokenTenant
//     .get(requestUrl)
//     .then((resp) => resp)
//     .catch((error) => error.response);
// Modified getRequestWithTenant function
export const getRequestWithTenant = async (requestUrl) => {
  try {
    const response = await apiwithTokenTenant.get(requestUrl);
    return response; // Return the original response to the caller
  } catch (error) {
    // Handle errors here if needed
    // For example, you can log the error or throw it again to be handled by the caller
    if (error.response.data.message === 'Please authenticate'){
      localStorage.removeItem("accessToken"); 
      window.location.reload()
    }
    throw error; // If you want to propagate the error to the caller
  }
};

export const postRequestWithTenat = async (requestUrl, data) =>
apiwithTokenTenant
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
export const patchRequestWithTokenTenant = async (requestUrl, data) =>
apiwithTokenTenant
  .patch(requestUrl, data)
  .then((resp) => resp)
  .catch((error) => error.response);


export const deleteRequestWithTokenTenant = async (requestUrl, data) =>
apiwithTokenTenant
  .delete(requestUrl, data)
  .then((resp) => resp)
  .catch((error) => error.response);

export const putRequestWithTenant = async (requestUrl, data) =>
  apiwithTokenTenant
            .put(requestUrl, data)
            .then((resp) => resp)
            .catch((error) => error.response);



            
// export const postFormDataRequest = async (requestUrl, data) => {
//   const formData = new FormData();
//   Object.keys(data).map((item) => formData.set(item, data[item]));
//   return api
//     .post(requestUrl, formData)
//     .then((resp) => resp)
//     .catch((error) => error.response);
// };


