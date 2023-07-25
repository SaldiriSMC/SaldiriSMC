const token = JSON.parse(localStorage.getItem("accessToken"))?.data?.tokens?.access?.token
const tenantKey = JSON.parse(localStorage.getItem("accessToken"))?.data?.tenant?.key

const apiUrl = process.env.REACT_APP_API_URL;
export const headerWithToken = {
  baseURL: apiUrl,
  headers: {
    "Authorization": `Bearer ${token}`,
    "X-Tenent-Key": tenantKey,
    "Content-Type": "application/json",
     'X-CSRFToken': `${token?.key}`
   
  },
}