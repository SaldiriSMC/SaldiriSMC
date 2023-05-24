import React, {useState} from 'react';
import { makeStyles } from 'tss-react/mui';
import './comaon.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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
function Footer() {

  return (
<>
<section className='footer' id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row" style={{ margin: "0 15px 0 15px" }}>
        <div className="col-lg-3 col-md-3 footer-info footer_logo">
          <div className="punch-info">
            <img src="/assets/footer.png" alt="" className="footer_image" />
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="punch-info">
            <img src="/assets/business.svg" alt="" />
            <p className="home-text">
              {" "}
              <strong>Business</strong>{" "}
            </p>
          </div>
          <p className="tex_align">
            Our team has the capability to work with multiple business domains
            like Finance, Telecom, CRM, and E-Commerce. We have the capability
            to analyse your business's actual needs and requirements.
          </p>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="punch-info">
            <img src="/assets/technology.svg" alt="" />
            <p className="home-text">
              {" "}
              <strong>Technology</strong>
            </p>
          </div>
          <p className="tex_align">
            We are equipped with latest tool and technologies that not only help
            analyse your business and problems but also provides appropriate
            solutions. We are technology lovers, always keep updating with.
          </p>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="punch-info">
            <img src="/assets/empowerment.svg" alt="" />
            <p className="home-text">
              {" "}
              <strong>Empowerment</strong>
            </p>
          </div>
          <p className="tex_align">
            With our intellect, latest software development methodologies, and
            updated technologies we give you better solutions to your problems.
            Come grow with us and empower your business.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-1"></div>
      <div className="col-2"></div>
      <div className="col-3">
        <div className="footer-menu">
          <span>
            <a onclick="ScrollInto('carouselExampleControls')" href="#0">
              Home
            </a>
          </span>
          <span>
            <a onclick="ScrollInto('about')" href="#0">
              About Us
            </a>
          </span>
          <span>
            <a onclick="ScrollInto('portfolio')" href="#0">
              Portfolio
            </a>
          </span>
          <span>
            <a onclick="ScrollInto('services')" href="#0">
              Services
            </a>
          </span>
        </div>
      </div>
      <div className="col-3">
        <div className="footer-menu">
          <span>
            <a onclick="ScrollInto('technologies')" href="#0">
              Technologies
            </a>
          </span>
          <span>
            <a onclick="ScrollInto('contact')" href="#0">
              Contact Us
            </a>
          </span>
          <span>
            <a onclick="ScrollInto('career')" href="#0">
              Careers
            </a>
          </span>
        </div>
      </div>
      <div className="col-2"></div>
      <div className="col-1"></div>
    </div>
  </div>
  <div className="container">
    <div className="copyright">
      © Copyright <strong>2021 Saldiri</strong>. All Rights Reserved
    </div>
  </div>
</section>


</>
  );
}

export default Footer;

