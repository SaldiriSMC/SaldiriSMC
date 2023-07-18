import axios from "axios";
const token = JSON.parse(localStorage.getItem("accessToken"))?.data?.tokens?.access?.token
console.log("tooken----------->>>>>>>>>>>>>", token)
const tenantKey = JSON.parse(localStorage.getItem("accessToken"))?.data?.tenant?.key
console.log(tenantKey)
const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: apiUrl,
  // withCredentials: false,
  // crossDomain: true,
  headers: {
    "Authorization": `Bearer ${token}`,
    "X-Tenent-Key": tenantKey,
    "Content-Type": "application/json",
     'X-CSRFToken': `${token?.key}`
   
  },
});