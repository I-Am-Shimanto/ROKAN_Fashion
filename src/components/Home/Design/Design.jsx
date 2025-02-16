import React from 'react'
import './design.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const Design = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div id="design" className='my-20'>
        <div className="container">
          <div className="row flex justify-between">
            <div data-aos="fade-up" data-aos-duration='2000' className="img_one">
              <img src="images/design_1.png" alt="design_1" />
              <div className="design_one_text">
              <h3 className='text-base font-normal font-archivo text-white leading-6 text-center'>SAVE 30%—50% CLOTHING</h3>
              <h2 className='text-4xl font-semibold font-archivo text-white leading-[43px] mt-1 mb-5'>High—Top Design</h2>
              <p className='text-[15px] font-normal font-archivo text-white leading-6 text-center'>In-store! Limited time offer.</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration='2000' className="img_two">
              <img src="images/design_2.png" alt="design_2" />
              <div className="design_two_text">
              <h3 className='text-base font-normal font-archivo text-white leading-6 text-center'>SAVE 30%—50% CLOTHING</h3>
              <h2 className='text-4xl font-semibold font-archivo text-white leading-[43px] mt-1 mb-5 text-center'>Colour Spotlight</h2>
              <p className='text-[15px] font-normal font-archivo text-white leading-6 text-center'>In-store! Limited time offer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Design