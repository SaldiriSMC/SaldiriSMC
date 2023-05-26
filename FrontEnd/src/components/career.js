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
function Careers() {
  const { classes } = useStyles();


  return (
<>
<section id="career" className="sect">
  <div className="container">
    <div className="section-header">
      <h3>Careers</h3>
    </div>
    <div className="row wow fadeInUp" style={{ margin: "0 15px 0 15px" }}>
      <div className="hiring col-lg-6">
        <img src="/assets/career.png" alt="" />
      </div>
      <div className="join-us col-lg-6">
        <div className="row">
          <div className="col-lg-12 info">
            <h2 className="text-center mt-2">Join Our Team</h2>
            <p>
              At Saldiri, most talented programmers, designers, and thought
              leaders are shaping the future of online technologies.
            </p>
          </div>
        </div>
        <div className="form">
          <div id="sendmessage">Your message has been sent. Thank you!</div>
          <div id="errormessage" />
          <form
            id="myForm"
            action="#0"
            method="post"
            role="form"
            className="contactForm"
          >
            <div className="row">
              <div className="form-group col-lg-12">
                <input
                  type="text"
                  name="name"
                  required=""
                  className="form-control"
                  id="Name2"
                  placeholder="Enter Your Name"
                  data-rule="minlen:4"
                  data-msg="*Please enter at least 4 chars"
                  minLength={4}
                  maxLength={25}
                />
                <div className="validation" />
              </div>
            </div>
            <div className="form-group text-start my-2">
              <select
                name="cars "
                id="desig"
                aria-placeholder=" "
                className="dropdown "
                required=""
              >
                <option
                  defaultValue=" "
                  disabled=""

                  hidden=""
                  className="hidden-text"
                >
                  Select{" "}
                </option>
                <option value="devOps ">DevOps</option>
                <option value="andriod_developers ">
                  Andriod / iOS Developer
                </option>
                <option value=".net-developer ">.Net Developer</option>
                <option value="python-developers ">Python Developer</option>
                <option value="seo-experts ">SEO Expert</option>
                <option value="bi-experts ">BI Expert</option>
                <option value="mercedes ">HR &amp; Admin Executive</option>
                <option value="business-analytics ">Business Analytics</option>
                <option value="others ">Others</option>
              </select>
              <div className="validation" />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                id="Message2"
                required=""
                rows={9}
                data-rule="required"
                data-msg="*Please write something for us"
                placeholder="Enter Your Message"
                style={{ resize: "none" }}
                defaultValue={""}
              />
              <div className="validation" />
              <br />
              <label htmlFor="myfile " className="carrer-upload-text text-start ">
                <strong>Upload CV/ Resume*</strong>
              </label>
              <br />
              <input
                type="file"
                id="myfile"
                name="myfile"
                style={{ margin: 10 }}
                required=""
                accept=".pdf"
                data-max-size={5000000}
              />
              <div className="validation" />
              <div
                className="g-recaptcha"
                data-sitekey=" 6LdMXW4aAAAAAFjbHETk3D2PJ-q_65UMoRVZ9_2K"
              />
            </div>
            <div className="text-center">
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

export default Careers;

