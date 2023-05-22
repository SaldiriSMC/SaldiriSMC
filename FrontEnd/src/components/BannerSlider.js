import React from 'react';
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
const useStyles = makeStyles()((theme) => {
  return {
    imgFullWidth:{
    width:'100%'
     }
  };
});
function MainSlider() {
  const { classes } = useStyles();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div >
 <Slider {...settings}>
     <div>
        <div className="slide-content">
          < Baner/>
        </div>
      </div>
      <div>
      <img   className={classes.imgFullWidth} src="/assets/slider/image-banner-1.png"></img>
      </div>
      <div >
      <img  className={classes.imgFullWidth} src="/assets/slider/image-banner-2.png"></img>
      </div>
      <div>
      <img  className={classes.imgFullWidth} src="/assets/slider/image-banner-3.jpg"></img>
      </div>
      <div>
      <img  className={classes.imgFullWidth} src="/assets/slider/image-banner-4.jpg"></img>
      </div>
    </Slider>
    </div>
  );
}

export default MainSlider;

