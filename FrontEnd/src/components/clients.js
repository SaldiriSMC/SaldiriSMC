import React, { useContext } from "react";
import Slider from 'react-slick';
import Baner from './baner';
import { makeStyles } from 'tss-react/mui';
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
function Clients() {
  const { classes } = useStyles();
  const { ClientNew} = useContext(FeedbackContext);
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 320,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true }
      }
    ],
    cssEase: "linear"
  };
  return (
<>
<section id="clients" className='clients_wrap'>
      <div className="">
        <div className="container ">
          <header className="section-header">
            <h3 className="mt-3">Clients</h3>
          </header>
          

  <Slider {...settings}>
  {React.Children.toArray(ClientNew.map((item)=>{
                return <>
        <div className="py-3">
      <img
      className="imgk"
        src={item.img}
        alt=""
      />
    </div>
                </>
              }))}
   </Slider>
  </div>
</div>


   
    </section>
</>
  );
}

export default Clients;

