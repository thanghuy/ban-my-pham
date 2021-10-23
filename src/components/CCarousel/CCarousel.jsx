import React from "react";
import Slider from "react-slick";

export default function CCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/faa27670584061.5bd3dcfabe723.png" />
      <img src="http://thegioidohoacom.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/12/12020604/thi%E1%BA%BFt-k%E1%BA%BF-banner-m%E1%BB%B9-ph%E1%BA%A9m-61.png" />

      <img src="https://topprint.vn/wp-content/uploads/2021/07/banner-my-pham-dep-12-1024x390.png" />

      <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/faa27670584061.5bd3dcfabe723.png" />
    </Slider>
  );
}
