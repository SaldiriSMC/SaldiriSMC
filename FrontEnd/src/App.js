import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/navBar'
import BannerSlider from './components/BannerSlider'
import AboutUs from './components/abousUs'
import Portfolio from './components/portfolio'
import Clients from './components/clients'
import Baner from './components/baner'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
  <Header/>
  {/* <Baner/> */}
  <BannerSlider/>
  <AboutUs/>
  <Portfolio/>
  <br></br>
  <Clients/>
    </div>
    </ThemeProvider>
  );
}

export default App;
