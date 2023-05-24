import React from 'react';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
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

function AboutUs() {
  
  const { classes } = useStyles();

return (
  <>
    <section id="about"  className={classes.sectionContainer}>
        <div className="container">
          <header className="section-header">
            <h3>About Us</h3>
            <p className="about-para">
              We are highly skilled with the latest technologies to empower your business and needs. We provide innovative
              ideas and solutions to give you better insights and help you make decisions for your company. We have vast
              experience in developing and marketing products in multiple domains like Telecommunications, Finance, and
              E-commerce. We also deal in cloud infrastructure and provide DevOps services and fulfillment Amazon services
              to the clients.
            </p>
            <p className="about-para">
              We would like to talk and listen to our clients and understand their concerns to polish them into ideas and
              then build them into a reality that satisfies and addresses their problems. Come Grow With Us.
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

