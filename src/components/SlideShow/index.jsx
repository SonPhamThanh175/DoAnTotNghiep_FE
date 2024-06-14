import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { Image } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideShow(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slideList = [
    {
      url: "/assets/images/slide1.jpg",
      title: "Image 1",
      description: "This is the first image",
    },
    {
      url: "/assets/images/slide2.jpg",
      title: "Image 2",
      description: "This is the second image",
    },
    {
      url: "/assets/images/slide3.jpg",
      title: "Image 3",
      description: "This is the third image",
    },
    {
      url: "/assets/images/slide4.jpg",
      title: "Image 4",
      description: "This is the fourth image",
    },
  ];

  return (
    <Slider {...settings}>
      {slideList.map((image, index) => (
        <div key={index}>
          <Image
            src={image.url}
            alt={image.title}
            preview={false}
            width="100%"
            height="274px"
          />
        </div>
      ))}
    </Slider>
  );
}

SlideShow.propTypes = {};

export default SlideShow;
