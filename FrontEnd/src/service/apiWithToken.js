import axios from "axios";
const token = JSON.parse(localStorage.getItem("tenant"))
console.log(token)
<<<<<<< HEAD
export default axios.create({
 baseURL: "http://ec2-18-191-81-48.us-east-2.compute.amazonaws.com:8000/",
 //baseURL: "http://192.168.18.36:8000/",
 // baseURL: "http://192.168.18.18:8000/",
 //baseURL: "http://192.168.18.11:8000/",
 //baseURL: "http://18.191.81.48:8000/",
=======
const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: apiUrl,
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
  // withCredentials: false,
  // crossDomain: true,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
     'X-CSRFToken': `${token?.key}`
   
  },
});