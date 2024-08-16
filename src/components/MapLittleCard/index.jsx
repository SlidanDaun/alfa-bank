import style from "./index.module.css";
import { useEffect } from "react";

import you from "../../assets/map/you.svg";
import bro from "../../assets/map/bro.svg";

export const MapLittleCard = () => {
  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(init);
    }

    function init() {
      const map = new window.ymaps.Map("map", {
        center: [43.663599, 40.314534], 
        zoom: 16,
        controls: [],
      });

      map.controls.add("zoomControl");

      const removePromo = () => {
        const promoElements = document.querySelectorAll(
          ".ymaps-2-1-79-copyrights-promo, .ymaps-2-1-79-islets_map_copyrights-promo"
        );
        promoElements.forEach((element) => {
          element.style.display = "none";
        });
      };


      const createPlacemark = (coords, imgSrc, text, size) => {
        return new window.ymaps.Placemark(
          coords,
          {
            hintContent: text,
            balloonContent: text,
          },
          {
            iconLayout: "default#image",
            iconImageHref: imgSrc,
            iconImageSize: size,  
            iconImageOffset: [-15, -42], 
          }
        );
      };


      const placemark1 = createPlacemark(
        [43.663599, 40.314534],
        you,
        "Ты",
        [70, 115]
      );
      const placemark2 = createPlacemark(
        [43.661675, 40.317614],
        bro,
        "Бро",
        [40, 75]
      );

      map.geoObjects.add(placemark1);
      map.geoObjects.add(placemark2);

      setInterval(removePromo, 500);


    }
  }, []);

  return <div className={style.card} id="map" />;
};
