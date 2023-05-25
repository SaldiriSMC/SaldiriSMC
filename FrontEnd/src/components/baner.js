import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="courel-section" id="home">
    <Carousel id="carouselExampleControls" >
      <Carousel.Item className="slide-a">
        <img className="d-block slider_img w-100 img-fluid" src="/assets/intro-bg2.png" alt="Third slide" />
        <div className="clearfix">
          <div className="slide-a-in" id="intro">
            <div className="intro-img">
              <img src="/assets/Background.png" alt="" className="img-fluid move_logo" />
            </div>
            <div className="intro-info">
              <h2>SALDIRI</h2>
              <h3 className="main_heading">Business | Technology | Empowerment</h3>
              <div className="button_wrap">
                <a  href="#0" className="btn-get-started scrollto">Join Us</a>
                <a  href="#0" className="btn-services scrollto">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="clearfix">
          <img className="d-block slider_img w-100 img-fluid" src="./assets/slider/image-banner-1.png" alt="Third slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="">
          <img className="d-block slider_img w-100" src="/assets/slider/image-banner-2.png" alt="Third slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="">
          <img className="d-block slider_img w-100" src="/assets/slider/image-banner-3.jpg" alt="Third slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="">
          <img className="d-block slider_img w-100" src="/assets/slider/image-banner-4.jpg" alt="Third slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="">
          <img className="d-block slider_img w-100" src="/assets/slider/image-banner-5.jpg" alt="Third slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="">
          <img className="d-block slider_img w-100" src="/assets/slider/image-banner-0.png" alt="Third slide" />
        </div>
      </Carousel.Item>
    </Carousel>
  </section>
  );
}
export default ControlledCarousel
