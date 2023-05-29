import React from 'react';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import {aboutUs} from '../data'
const useStyles = makeStyles()((theme) => {
  return {
    sectionContainer: {
        background: theme.palette.white?.main,
        padding: "40px 20px 20px 20px",
        borderRadius: 10,
        position: "relative",
        // margin: "20px 0",
      },
      aboutImgs:{
        display:'flex',
        justifyContent:'center'
      }
  };
});

function AboutUs() {
  
  const { classes } = useStyles();

return (
  <>
    <section id="about"  className={classes.sectionContainer}>
        <div className="container">
          <header className="section-header">
            <h3>{aboutUs.title}</h3>
            <p className="about-para">
              {aboutUs.description1}
            </p>
            <p className="about-para">
            {aboutUs.description2}
            </p>
          </header>
          <div className={classes.aboutImgs}>
            <div>
              <img className="about-img" src="/assets/Card4.png" alt="software-development" />
            </div>
            <div>
              <img className="about-img" src="/assets/Card3.png" alt="software-menagement" />
            </div>
            <div>
              <img className="about-img" src="/assets/Card1.png" alt="dev-ops" />
            </div>
            <div>
              <img className="about-img" src="/assets/Card2.png" alt="Amazon-fullfilaments" />
            </div>
          </div>
        </div>
      </section>
  </>
  );
}

export default AboutUs;

