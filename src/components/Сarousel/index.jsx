import style from "./index.module.css";

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

  return (
    <div className={style.carouselContainer}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className={style.carouselItem}>
            <img src={logo} alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
