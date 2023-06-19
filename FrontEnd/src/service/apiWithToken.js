import axios from "axios";
const token = JSON.parse(localStorage.getItem("tenant"))
console.log(token)
export default  axios.create({
 baseURL: "http://ec2-18-191-81-48.us-east-2.compute.amazonaws.com:8000/",
 //baseURL: "http://192.168.18.36:8000/",
 // baseURL: "http://192.168.18.18:8000/",
 //baseURL: "http://192.168.18.11:8000/",
 //baseURL: "http://18.191.81.48:8000/",
  // withCredentials: false,
  // crossDomain: true,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
     'X-CSRFToken': `${token?.key}`
   
  },
});