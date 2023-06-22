import React, { useContext } from "react";
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import { FeedbackContext } from "../context/FeedbackContext";
import Button from '@mui/material/Button';
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
        background: theme.palette.white?.main,
        padding: "40px 20px 20px 20px",
        borderRadius: 10,
        position: "relative",
        // margin: "20px 0",
      },
      btn: {
        display:'flex',
        borderRadius: 20,
        height:50,
        width:170,
        fontWeight: 600,
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});

function AboutUs() {
  const { aboutUs} = useContext(FeedbackContext);
  const { classes } = useStyles();

return (
  <>
    <section id="about"  className={classes.sectionContainer}>
        <div className="container">
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className={classes.aboutImgs}>
            <div>
              <img className="about-img w-100" src="/assets/about.jpg" alt="software-development" />
            </div>
            <img className="about_img_2 d-sm-none d-xs-none d-lg-block" src="/assets/about2.jpg" alt="software-development" />
          </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
            <header className="section-header">
            <h3>{aboutUs.title}</h3>
            <p className="about-para">
              {aboutUs.description1}
            </p>
            <p className="about-para">
            {aboutUs.description2}
            </p>
          
          </header>
          {/* <Button
                  className={classes.btn}
                 variant="contained"
                 color="primary"
                //  style={{ marginTop: '20px' }}
               >
               Read More
               </Button> */}
            </div>
          </div>
        
          
        </div>
      </section>
  </>
  );
}

export default AboutUs;

