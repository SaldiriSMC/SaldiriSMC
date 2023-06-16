import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from './components/SignUp'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import configureStore from "./store";
import { Provider } from "react-redux";
function App() {
  const store = configureStore();
  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
    <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
