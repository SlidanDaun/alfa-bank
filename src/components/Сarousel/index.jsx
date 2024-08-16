import style from "./index.module.css";
import { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = ({ logos }) => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const afterChangeHandler = (current) => {
    setCurrentIndex(current);
  };

  const getMiddleIndex = () => {
    return currentIndex;
  };

  const logoHandler = (url) => {
    window.open(url, "_blank");
  };

  const middleIndex = getMiddleIndex();

  return (
    <div className={style.carouselContainer}>
      <Slider {...settings} afterChange={afterChangeHandler}>
        {logos.map((logo, index) => (
          <div
            key={index}
            onClick={() => logoHandler(logo.url)}
            className={`${style.carouselItem} ${
              index === middleIndex ? style.enlarged : ""
            }`}
          >
            <img src={logo.src}  alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
