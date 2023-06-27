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
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    arrows: false,
    // slidesToScroll: 1
  };


  return (
<>
<section id="clients" className='clients_wrap'>
      <div className="">
        <div className="container">
          <header className="section-header">
            <h3>Clients</h3>
          </header>
          

          <div className="slideru">
  <div className="slide-track">
  {React.Children.toArray(ClientNew.map((item)=>{
                return <>
        <div className="slide">
      <img
      className="imgk"
        src={item.img}
        alt=""
      />
    </div>
                </>
              }))}
  
  </div>
</div>


        </div>
      </div>
    </section>
</>
  );
}

export default Clients;

