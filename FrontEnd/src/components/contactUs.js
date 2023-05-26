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
function ContactUs() {
  const { classes } = useStyles();


  return (
<>
<section id="contact" className="sect">
  <div className="container">
    <div className="section-header">
      <h3>Contact Us</h3>
    </div>
    <div className="row wow fadeInUp" style={{ margin: "0 15px 0 15px" }}>
      <div className="col-lg-6">
        <div className="map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.368913857586!2d74.31283566977538!3d31.501020199999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904710773389f%3A0x4df4dc1440f48ee1!2sBarkat%20Market!5e0!3m2!1sen!2s!4v1658412009764!5m2!1sen!2s"
            frameBorder={0}
            style={{ borderRadius: 10, width: "100%", height: 520 }}
            allowFullScreen=""
          />
        </div>
      </div>
      <div className="contact col-lg-6">
        <div className="row mt-2">
          <div className="col-md-5 info d-flex">
           
            <p>
            <LocationOnOutlinedIcon sx={{mr:1}} />
              2nd Floor, Office # 1,Centeral Plaza , Barakat Market Lahore,
              Pakistan
            </p>
          </div>
          <div className="col-md-5 info d-flex">
           
            <p>
            <EmailOutlinedIcon sx={{mr:1}}  />
                queries@saldri.com</p>
          </div>
          <div className="col-md-3 info"></div>
        </div>
        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage" />
          <form
            action="#0"
            id="myForm2"

            method="post"
            role="form"
            className="contactForm"
          >
            <div className="row mb-2">
              <div className="form-group col-lg-6">
                <input
                  type="text"
                  name="name"
                  required=""
                  className="form-control"
                  id="Name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="*Please enter at least 4 chars"
                />
                <div className="validation" />
              </div>
              <div className="form-group col-lg-6">
                <input
                  type="email"
                  className="form-control"
                  required=""
                  name="email"
                  id="Sender"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="*Please enter a valid email"
                />
                <div className="validation" />
              </div>
            </div>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="Subject"
                placeholder="Subject"
                data-rule="minlen:4"
                data-msg="*Please enter at least 8 chars of subject"
              />
              <div className="validation" />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="Message"
                name="message"
                rows={10}
                data-rule="required"
                data-msg="*Please write something for us"
                placeholder="Message"
                style={{ height: "100p", resize: "none" }}
                defaultValue={""}
              />
              <div className="validation" />
              <div
                className="g-recaptcha"
                data-sitekey=" 6LdMXW4aAAAAAFjbHETk3D2PJ-q_65UMoRVZ9_2K"
              />
            </div>
            <div className="text-center mt-2">
              <button type="submit" title="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>



</>
  );
}

export default ContactUs;

