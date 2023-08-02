import React, { useState, useContext } from 'react';
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
import PortfolioModel from './modal'
import './comaon.css';
import { FeedbackContext } from "../context/FeedbackContext";
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
<section id="portfolio" className="clearfix sect section-bg portfolio-wrap">
      <div className="container">
        <header className="section-header">
          <h3 className="section-title">Portfolio</h3>
        </header>
        <div className="row portfolio-container" >
        
                   <div className="col-lg-4 col-md-6  mb-2">
            <div className="portfolio-wrap">
              <img src='/assets/portfolio/p1.png' className=" poltfolio-img" alt="website template image" />

            </div>
            <div className="portfolio-wrap mt-3">
              <img src='/assets/portfolio/p2.png' className=" poltfolio-img" alt="website template image" />
            </div>
          </div>
          
                   <div className="col-lg-4 col-md-6  filter-card mb-2 position-relative">
            <div className="portfolio-wrap position-relative">
              <img src='/assets/portfolio/Rectangle 111.png' className=" poltfolio-img position-relative" alt="website template image" />

            </div>
          </div>
          
                   <div className="col-lg-4 col-md-6  filter-card mb-2" style={{ display: "",
  flexDirection: "column",
  justifyContent: "space-around"}}>
            <div className="portfolio-wrap">
              <img src='/assets/portfolio/p3.png' className=" poltfolio-img w-100" alt="website template image" />
              <div className="portfolio-info">
          
                <div>
         
                </div>
              </div>
            </div>
            <div className="portfolio-wrap mt-3">
              <img src='/assets/portfolio/p4.png' className=" poltfolio-img w-100" alt="website template image" />
              <div className="portfolio-info">
          
                <div>
         
                </div>
              </div>
            </div>
          </div>
          
       
          
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

