import React from 'react';
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import {Client} from '../data'
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
function Clients() {
  const { classes } = useStyles();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


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
            <Slider {...settings}>
              {Client.map((item)=>{
                return <>
                    <div className="carousel-item active">
                <div className="carousel-caption">
                  <img className='m-auto' src={item.img} alt="Client 1" />
                  <div id="image-caption">{item.name}</div>
                  <p>{item.comment}</p>
                </div>
              </div>
                </>
              })}
              </Slider>
            </div>
      
          </div>

        </div>
      </div>
    </section>
</>
  );
}

export default Clients;

