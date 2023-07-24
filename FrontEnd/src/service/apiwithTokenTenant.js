import axios from "axios";
const token = JSON.parse(localStorage.getItem("accessToken"))?.data?.tokens?.access?.token
console.log("tooken----------->>>>>>>>>>>>>", token)
const tenantKey = JSON.parse(localStorage.getItem("accessToken"))?.data?.tenant?.key
console.log(tenantKey)
export default axios.create({
 //baseURL: "http://ec2-18-191-81-48.us-east-2.compute.amazonaws.com:8000/",
 baseURL: "http://192.168.18.33:8080/v2",
 // baseURL: "http://192.168.18.18:8000/",
 //baseURL: "http://192.168.18.11:8000/",
 //baseURL: "http://18.191.81.48:8000/",
  // withCredentials: false,
  // crossDomain: true,
  headers: {
    "Authorization": `Bearer ${token}`,
    "X-Tenent-Key": tenantKey,
    "Content-Type": "application/json",
     'X-CSRFToken': `${token?.key}`
   
  },
});