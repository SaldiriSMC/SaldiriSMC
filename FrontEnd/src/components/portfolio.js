import React, { useState } from 'react';
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
import PortfolioModel from './modal'
import './comaon.css';
import {portfolio} from '../data'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
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
function Portfolio() {
  const { classes } = useStyles();
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
          <h3 className="section-title">Our Portfolio</h3>
        </header>
        <div className="row portfolio-container" style={{ position: 'relative' }}>
               {React.Children.toArray(portfolio.map((item,index)=>{
                return <>
                   <div className="col-lg-4 col-md-6 portfolio-item filter-card mb-2">
            <div className="portfolio-wrap">
              <img src={item.mainImage} className="img-fluid poltfolio-img" alt="website template image" />
              <div className="portfolio-info">
                <h4><a href="https://www.free-css.com/free-css-templates">{item.title}</a></h4>
                <div>
                  <span className="link-preview"><RemoveRedEyeIcon onClick={()=>{setModelData(item);setOpen(true)}} sx={{mt:.75}}/></span>
                </div>
              </div>
            </div>
          </div>
                </>
            }))}
       
          
          {/* Add the remaining portfolio items here */}
          
        </div>
      </div>

      <PortfolioModel
        setOpen={setOpen}
        open={open}
        modelData={modelData}
        // handleCancel={handleCancelDelete}
        title={modelData?.title}
        description={modelData?.description}
        // handleClose={handleDeleteDone}
      />
    </section>
</>
  );
}

export default Portfolio;

