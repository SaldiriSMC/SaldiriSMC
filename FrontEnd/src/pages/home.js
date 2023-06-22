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
function Home() {
  
return (
  <>
      <Header/>
      <Baner/>
      <AboutUs/>
      <Portfolio/>      
      <Clients/>
      <TestMonails/>
      <Services/>
      {/* <Technologies/>
      <ContactUs/>
      <Careers/> */}
      <Footer/>
  </>
  );
}

export default Home;

