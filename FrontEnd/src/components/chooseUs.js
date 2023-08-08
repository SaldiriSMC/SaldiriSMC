import React, { useState, useContext } from 'react';
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
import PortfolioModel from './modal'
import './comaon.css';
import { FeedbackContext } from "../context/FeedbackContext";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Grid } from '@mui/material';
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
        background: theme.palette.white?.main,
        padding: "40px 20px 20px 20px",
        borderRadius: 10,
        position: "relative",
        margin: "20px 0",
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});
function ChooseUs() {
  const { classes } = useStyles();
  const { portfolio} = useContext(FeedbackContext);
  const [modelData, setModelData]=useState({images:[]})
  const [open, setOpen]=useState(false)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
<>
<section id="portfolio" className="clearfix sect portfolio-wrap">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title" style={{color:'#D881A8'}}>Why Choose Us </h3>
          <p className='w-50 m-auto about-para'>We are highly skilled with the latest technologies to empower your business and needs. 
We provide innovative ideas and solutions to give you better insights and helps you 
make decisions for your company. We have vast experience in developing and marketing
products in multiple domains like Telecommunications, Finance, and E-commerce. 
We also deal in cloud infrastructure and provide DevOps services and fulfillment Amazon 
services to the clients.</p>
        </header>
        <div className="row portfolio-container mt-3" >
        
                   <div className="col-lg-3 col-md-6  mb-2 whyUs_card" >
   <div style={{backgroundColor:'#EF7C8E'}}> 
   <div>
   <CheckCircleOutlineIcon style={{width:'4rem',height:'4rem',color:'white'}} />
   <h5 className='text-white text-left mt-2 '>RESPONSIVE</h5>
   </div>

   
   <div className='ps-3 pe-3  text-white'>
   <hr style={{ opacity: 'unset',borderBottomColor:'white' }} />
   <p className='text-white'>
Quick and appreciated response based on improvisation comes with practice and keeping ourselves updated in real-time.
</p>
   </div>

   </div>
          </div>
          
                   <div className="col-lg-3 col-md-6   mb-2 whyUs_card" >
                   <div style={{backgroundColor:'#FFBD59'}}> 
                   <div>
   <CheckCircleOutlineIcon style={{width:'4rem',height:'4rem',color:'white'}} />
   <h5 className='text-white text-left mt-2 '>AFFORDABLE</h5>
   </div>

   
   <div className='ps-3 pe-3  text-white'>
   <hr style={{ opacity: 'unset',borderBottomColor:'white' }} />
   <p className='text-white'>
   Without compromising on quality we come up with customized and budget-friendly services for our clients.
</p>
   </div>
                   </div>
          </div>
          
                   <div className="col-lg-3 col-md-6  mb-2 whyUs_card" >
                   <div style={{backgroundColor:'#38B6FF'}}>   <div>
   <CheckCircleOutlineIcon style={{width:'4rem',height:'4rem',color:'white'}} />
   <h5 className='text-white text-left mt-2 '>AGILE</h5>
   </div>

   
   <div className='ps-3 pe-3  text-white'>
   <hr style={{ opacity: 'unset',borderBottomColor:'white' }} />
   <p className='text-white'>
   A staunch approach is not appreciated on our platform.
</p>
   </div> </div>
          </div>
                   <div className="col-lg-3 col-md-6   mb-2 whyUs_card" >
                   <div style={{backgroundColor:'#8351E5'}}>   <div>
   <CheckCircleOutlineIcon style={{width:'4rem',height:'4rem',color:'white'}} />
   <h5 className='text-white text-left mt-2 '>EMPATHETIC</h5>
   </div>

   
   <div className='ps-3 pe-3  text-white'>
   <hr style={{ opacity: 'unset',borderBottomColor:'white' }} />
   <p className='text-white'>
   Internal and external stakeholders are treated empathetically.
</p>
   </div></div>
          </div>
          
          
        </div>
      </div>

    
    </section>
</>
  );
}

export default ChooseUs;
