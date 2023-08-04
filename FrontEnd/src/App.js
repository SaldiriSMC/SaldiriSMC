import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home'
import CreateEmailTemplate from './pages/createEmailTemplate'
import EmailTemplate from './pages/emailTemplate'
import Services from './pages/services'
import Technologies from './pages/technologies'
import ContactUs from './components/contactUs'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Header from './components/navBar'
import Careers from './components/career'
import Footer from './components/footer'
import Dashboard from './components/dashboard';
import InviteUser from './components/inviteUser';
import Attendance from './components/attendanceAdjusment';
import Tenant from './pages/tetent';
import TetentStatus from './pages/tetentStatus';
import Queues from './pages/queues';
import TetentDepartment from './pages/tetentDepartment';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/privateRoute';
import SignUp from './components/SignUp'
import ForgetPassword from './components/forgetPassword'
import {
  checkUserStatus,
} from "./service/users";
import ChnagePassword from './components/chnagePassword'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { BrowserRouter, Routes, Route, Navigate ,Outlet } from 'react-router-dom';
import configureStore from "./store";
import { Provider,useSelector } from "react-redux";
import { FeedbackProvider } from "./context/FeedbackContext";
import HackTimer from "./HackTimer";
function App({data}) {
  var user = JSON.parse(localStorage.getItem("accessToken"))
  const token = user?.data?.tokens?.access?.token
  const userId = user?.data?.user?.id
  const timeId = user?.data?.timeDoc?.id
  const attendanceid = user?.data?.timeDoc?.attendanceId
  // const isLoading = useSelector((state) => state.loder?.isLoading);
  const store = configureStore();
  const url = window.location.href.split( '/' )[3];
  const [loader, setLoader] = useState(false)

  function areAPICallsAlreadySent() {
    return localStorage.getItem('apiCallsSent') === 'true';
  }
  
  // Function to mark API calls as sent
  function markAPICallsAsSent() {
    localStorage.setItem('apiCallsSent', 'true');
  }
// Function to remove API calls flag when the tab is closed
function clearAPICallsFlagOnTabClose() {
  localStorage.removeItem('apiCallsSent');
}

  // Attach the clearAPICallsFlagOnTabClose function to the beforeunload event
window.addEventListener('beforeunload', clearAPICallsFlagOnTabClose);

useEffect(()=>{

},[localStorage])



useEffect(() => {
  // Function to check if API calls are already sent


  // Function to fetch data from the API
  const fetchData = () => {
    checkUserStatus({token:token,id:userId, attendanceId:attendanceid,
      timeId:timeId})
    .then((response) => {
      if (response.data) {
        markAPICallsAsSent();
        
      }
    })
    .catch((error) =>{
      if (error.response?.data?.message === 'Please Provide Correct Tenant Key' || error.response.data.message === 'Please authenticate' ){
        localStorage.removeItem("accessToken"); 
        // window.location.reload()
      }
    })
    .finally(() => {
  
  
  });
  };

  if (!areAPICallsAlreadySent()) {
    if (user) {
      // Fetch data immediately when the component mounts
      fetchData();

      // Set up the interval to fetch data every 5 seconds (60000 milliseconds)
      const interval = setInterval(fetchData, 1200000);

      // Clean up the interval when the component unmounts
      // return () => {
      //   clearInterval(interval);
      // };
    }
  }
}, [user]);




  return (
    <FeedbackProvider data={data}>
    <ThemeProvider theme={theme}>
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
    {loader &&    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/forget" element={<ForgetPassword/>} />
        <Route path="/chanagePassword" element={<ChnagePassword/>} />
        <Route path="/technologies" element={<Technologies/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactUs" element={<ContactUs/>} /> 
        <Route path="/careers" element={<Careers/>} />
        <Route exact path='/dashboard' element={<PrivateRoute/>}>
            <Route exact path='/dashboard' element={<Dashboard   />}/>
        </Route>
        <Route exact path='/attendance' element={<PrivateRoute/>}>
            <Route exact path='/attendance' element={<Attendance   />}/>
        </Route>
        <Route exact path='/inviteUser' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/inviteUser' element={<InviteUser  loader={loader} setLoader={setLoader} />}/>
        </Route>
        <Route exact path='/emailTemplate' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/emailTemplate' element={<EmailTemplate  loader={loader} setLoader={setLoader} />}/>
        </Route>
        <Route exact path='/createEmailTemplate' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/createEmailTemplate' element={<CreateEmailTemplate  loader={loader} setLoader={setLoader} />}/>
        </Route>
        <Route exact path='/tenant' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/tenant' element={<Tenant  loader={loader} setLoader={setLoader} />}/>
        </Route>
        <Route exact path='/tenantStatus' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/tenantStatus' element={<TetentStatus  loader={loader} setLoader={setLoader} />}/>
        </Route>
        <Route exact path='/tetentDepartment' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/tetentDepartment' element={<TetentDepartment  loader={loader} setLoader={setLoader} />}/>
        </Route>
        <Route exact path='/queues' element={<PrivateRoute loader={loader} setLoader={setLoader} />}>
            <Route exact path='/queues' element={<Queues  loader={loader} setLoader={setLoader} />}/>
        </Route>
       
      </Routes>

    </BrowserRouter>
    </Provider>
    </div>
    <ToastContainer />
    </ThemeProvider>
    </FeedbackProvider>
  );
}

export default App;
