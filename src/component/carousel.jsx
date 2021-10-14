import React from 'react';
import img1 from '../img/slider/img1.png';
import img2 from '../img/slider/img2.png';
import img3 from '../img/slider/img3.png';

const Carousel = () => {
  const imagesPath = [];
  imagesPath.push(img1, img2, img3, img3, img1, img2, img3);
  
  return(
  <div className="slider">
    {imagesPath.map((imgPath, index) => {
      return (
        <div className="slide" key = {index} >
          <img src={imgPath} alt="" srcset="" />
        </div>
      )
    })}
  </div>
)};
export default Carousel;
