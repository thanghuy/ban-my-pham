import React from "react";
import Slider from "react-slick";

export default function CCarousel({children}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="custom-slider-show">
      {children}
    </Slider>
  );
}
