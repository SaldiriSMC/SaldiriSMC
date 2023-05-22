import React from 'react';
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import {Portfolio} from '../data'
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
function MainSlider() {
  const { classes } = useStyles();




  return (
<>
<section id="clients">
      <div className="container-new">
        <div className="container">
          <header className="section-header">
            <h3>Clients</h3>
          </header>

          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption">
                  <img src="./img/download1.svg" alt="Client 1" />
                  <div id="image-caption">Afaq S. | Program/Project Management | Service Delivery | Te</div>
                  <p>"Saldiri team is a capable engineering team with exceptional skills in multiple technology stacks. Commands in new technologies and quickly becomes productive by designing and implementing solutions. Well satisfied with the services provided on time."</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <img src="./img/download1.svg" alt="Client 2" className="img-fluid" />
                  <div id="image-caption">Sadaf k. | Business Support Manager</div>
                  <p>"Very reliable and efficient services. CEO is highly customer focused with professional attitude. Highly recommended!!"</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <img src="./img/download1.svg" alt="Client 3" className="img-fluid" />
                  <div id="image-caption">Arsalan N. | Corporate Finance Specialist | Deals Modelling | Social Media and travel</div>
                  <p>"It is great working with Saldiri SMC PVT LTD. Looking forward to work on more projects. I must say Saldiri team is truly professional and deliver tasks right on time."</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span id="left-arrow" className="arrow left fa fa-chevron-left"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span id="right-arrow" className="arrow right fa fa-chevron-right"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
</>
  );
}

export default MainSlider;

