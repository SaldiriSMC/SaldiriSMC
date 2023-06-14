import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
export default axios.create({
 baseURL: apiUrl,
  //baseURL: "http://192.168.18.36:8000/",
 //baseURL: "http://192.168.18.11:8000/",
  // withCredentials: false,
  // crossDomain: true,
  headers: {
    // 'Content-Type': 'application/json',
    // 'accept': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'X-CSRFToken': 'cz2umnX04FywNVQnmqLHjelxJ9zZP1FOxbzDQAo1a7AyHA6nmZ4fNSdTBf9lw8wL'
    // 'Accept': '*/*',
    "Content-Type": "application/json",
  },
});

