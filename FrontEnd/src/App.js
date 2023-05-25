import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/navBar'
import Baner from './components/baner'
import AboutUs from './components/abousUs'
import Portfolio from './components/portfolio'
import Clients from './components/clients'
import Services from './components/services'
import Technologies from './components/technologies'
import ContactUs from './components/contactUs'
import Careers from './components/career'
import Footer from './components/footer'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <Baner/>
      <AboutUs/>
      <Portfolio/>
      <Clients/>
      <Services/>
      <Technologies/>
      <ContactUs/>
      <Careers/>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
