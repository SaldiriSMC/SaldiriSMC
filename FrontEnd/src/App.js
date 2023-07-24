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
<<<<<<< HEAD
import Dashboard from './pages/dashboard';
=======
import Dashboard from './components/dashboard';
import InviteUser from './components/inviteUser';
import Attendance from './pages/attendance';
import Tenant from './pages/tetent';
import TetentStatus from './pages/tetentStatus';
import TetentDepartment from './pages/tetentDepartment';
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/privateRoute';
import SignUp from './components/SignUp'
import ForgetPassword from './components/forgetPassword'
// import { useDispatch, useSelector } from "react-redux";
import ChnagePassword from './components/chnagePassword'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { BrowserRouter, Routes, Route, Navigate ,Outlet } from 'react-router-dom';
import configureStore from "./store";
import { Provider,useSelector } from "react-redux";
import { FeedbackProvider } from "./context/FeedbackContext";
function App({data}) {
  var user = JSON.parse(localStorage.getItem("accessToken"))
  // const isLoading = useSelector((state) => state.loder?.isLoading);
  const store = configureStore();
  const url = window.location.href.split( '/' )[3];
  const [loader, setLoader] = useState(false)

  console.log('user------------->appppppp>>>>>>>>>>',user)

useEffect(()=>{
  console.log('user------------->appppp   kkkkkk  pp>>>>>>>>>>',user)
},[localStorage])

//   const PrivateRoute = ({loader,setLoader}) => {
//     return user ? <Outlet loader={loader} setLoader={setLoader}  /> : <Navigate to="/" />;
// }

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
<<<<<<< HEAD
        <Route path="/dashboard" element={<Dashboard/>} />
=======
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
       
>>>>>>> 51a199b03f63a0c6bc36560c169e914c4c272630
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
