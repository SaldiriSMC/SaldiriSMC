import React from 'react';
import Header from '../components/navBar'
import Baner from '../components/baner'
import AboutUs from '../components/abousUs'
import Portfolio from '../components/portfolio'
import Clients from '../components/clients'
import TestMonails from '../components/testmonials'
import Services from '../components/servicesNew'
import Technologies from '../components/technologies'
import ContactUs from '../components/contactUs'
import Careers from '../components/career'
import Footer from '../components/footer'
import ChooseUs  from '../components/chooseUs'
function Home() {
  
return (
  <>
      <Header/>
      <Baner/>
      <AboutUs/>

      
      {/* <TestMonails/> */}
      <Services/>
      <Technologies/>
      {/* <ContactUs/> */}
      {/* <Careers/> */}
      {/* <div id='divider'></div> */}
            <Portfolio/>      
      <ChooseUs/>
      <Clients/>
      <Footer/>
  </>
  );
}

export default Home;
