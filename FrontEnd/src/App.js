import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/navBar'
import Slider from './components/slider'
import Baner from './components/baner'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
  <Header/>
  {/* <Baner/> */}
  <Slider/>
    </div>
    </ThemeProvider>
  );
}

export default App;
