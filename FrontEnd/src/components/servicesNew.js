import React, {useState} from 'react';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import './comaon.css';
import Button from '@mui/material/Button';
import {Services} from '../data'
import { Link, Outlet } from 'react-router-dom';
import PortfolioModel from './modal'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
function Service() {

  const [open, setOpen]=useState(false)
  const [modelData, setModelData]=useState({})
  return (
<>
<section id="services" className="section-bg sect">
  <div className="container">
    <header className="section-header">
      <h3>Services</h3>
    </header>
    <div className="row ">
      {React.Children.toArray(Services.map((item,index)=>{
            return<>
      <div className="col-xs-12 col-sm-6 col-md-4">
        <div className="sercice_box">
        <img className='w-100' src={item.mainImg}></img>
        <div className='services_img_text '> 
        <div className='services_icon  m-auto'>
        <img src='/assets/ServicesNew/logo1.png'></img>
        </div>
      <h3 className='services_text_title'> {item.title}</h3>
       <p className='services_text_desp'> {item.description} </p> 
       <div className='blue_circule'>
       {/* onClick={()=>{setModelData(item);setOpen(true)}} */}
        <ArrowRightAltOutlinedIcon  size="large"/>
       </div>
       </div>
        </div>
      </div>
            </>
        }))}
 <Link to="/services"> 
           <Button
              
                 variant="contained"
                 color="primary"
                 style={{ marginTop: '50px',width:200,borderRadius:30,marginRight:'auto',marginLeft:'auto'}}
               >
                 View More
            
               </Button>
               </Link>
    </div>
    
  </div>

  
  <PortfolioModel
        setOpen={setOpen}
        open={open}
        services={modelData}
        description={modelData?.description}
      />
</section>

</>
  );
}

export default Service;

