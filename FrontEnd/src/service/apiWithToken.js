import axios from "axios";
const token = JSON.parse(localStorage.getItem("tenant"))
console.log(token)
const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
  baseURL: apiUrl,
  // withCredentials: false,
  // crossDomain: true,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
     'X-CSRFToken': `${token?.key}`
   
  },
});