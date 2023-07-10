import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home'
import Services from './pages/services'
import Technologies from './pages/technologies'
import ContactUs from './components/contactUs'
import Header from './components/navBar'
import Careers from './components/career'
import Footer from './components/footer'
import Dashboard from './pages/dashboard';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from './components/SignUp'
import ForgetPassword from './components/forgetPassword'
import ChnagePassword from './components/chnagePassword'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom';
import configureStore from "./store";
import { Provider } from "react-redux";
import { FeedbackProvider } from "./context/FeedbackContext";
function App({data}) {
  const store = configureStore();
  const url = window.location.href.split( '/' )[3];

  console.log("current pathn--",url);
  return (
    <FeedbackProvider data={data}>
    <ThemeProvider theme={theme}>
    <div className="App">

    <Provider store={store}>
    <BrowserRouter>
    {/* <Header/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/forget" element={<ForgetPassword/>} />
        <Route path="/chanagePassword" element={<ChnagePassword/>} />
        <Route path="/technologies" element={<Technologies/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contactUs" element={<ContactUs/>} /> 
        <Route path="/careers" element={<Careers/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </Provider>
    </div>
    <ToastContainer />
    </ThemeProvider>
    </FeedbackProvider>
  );
}

export default App;
