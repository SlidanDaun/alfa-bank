import React from "react";
import style from "./index.module.css";
import Slider from "react-slick";
import { useState } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      image: "https://via.placeholder.com/150",
      name: "Дыня Торпеда",
      weight: "2-3 кг",
      price: "299 ₽",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Клубника, фермерская",
      weight: "200 г",
      price: "499 ₽",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "Абрикосы",
      weight: "500 г",
      price: "139 ₽",
    },
    {
      image: "https://via.placeholder.com/150",
      name: "бананы",
      weight: "500 г",
      price: "139 ₽",
    },
  ];

  return (
    <div className={style.productSlider}>
      <div className={style.sliderHeader}>
        <h2>Вкуснее на природе</h2>
        <a href="#" className={style.sliderMore}>
          Больше
        </a>
      </div>
      <Slider {...settings} className={style.slickSlider}>
        {products.map((product, index) => (
          <div key={index} className={style.productCard}>
            <img src={product.image} alt={product.name} />
            <div className={style.productInfo}>
              <h3>{product.name}</h3>
              <p>{product.weight}</p>
              <div className={style.productPrice}>
                <span>{product.price}</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
