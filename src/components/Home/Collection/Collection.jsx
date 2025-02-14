import React from 'react'
import Slider from "react-slick";
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Collection = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
      return (
        <>
        <Slider {...settings}>
          <div>
            <img className='w-full px-3 rounded-[30px]' src="images/col_1.png" alt="" />
          </div>
        </Slider>
    </>
  )
}

export default Collection