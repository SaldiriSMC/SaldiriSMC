import React from 'react';
import Slider from 'react-slick';
import './comaon.css';

function MainSlider() {
    var settings = {
        dots: true,
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
          <img src="/assets/slider/image-banner-1.png" alt="Image 1" />
        </div>
      </div>
      <div>
      <img  src="/assets/slider/image-banner-1.png"></img>
      </div>
      <div>
      <img  src="/assets/slider/image-banner-2.png"></img>
      </div>
      <div>
      <img  src="/assets/slider/image-banner-3.jpg"></img>
      </div>
      <div>
      <img  src="/assets/slider/image-banner-4.jpg"></img>
      </div>
    </Slider>
    </div>
  );
}

export default MainSlider;
