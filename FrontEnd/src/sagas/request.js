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
    processResponse(response); // Call the processResponse function to handle the response data

    return response; // Return the original response to the caller
  } catch (error) {
    // Handle errors here if needed
    // For example, you can log the error or throw it again to be handled by the caller
    console.error("Error:", error);
    throw error; // If you want to propagate the error to the caller
  }
};
// export const getRequestWithOutToken = async (requestUrl) =>
//       api
//     .get(requestUrl)
//     .then((resp) => resp)
//     .catch((error) => error.response);

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



// Higher-order function to process the response
const processResponse = (response) => {
  // Additional code to process the response data goes here
  // For example, you can extract the data from the response
  const responseData = response.data;
  // Perform some actions with responseData or log it
  console.log("Response Data:0----------------dddd", responseData);
};