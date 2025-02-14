import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <>
        <section id='banner'>
            <div className="container">
                <div className='text'>
                   <h1 data-aos="fade-left" data-aos-duration='2000' className='text-[45px] font-normal font-archivo text-white leading-[51px]'>Lifestyle Inspiration</h1>
                   <p data-aos="fade-left" data-aos-duration='2000' className='max-w-[405px] text-[15px] font-normal font-archivo text-white leading-[22.5px] mt-[10px] mb-[30px]'>Inspire your customers by illustrating a sophisticated lifestyle
                   made possible through their purchases on your website.</p>
                   <Link className='link font-archivo font-medium text-[13px] text-white'>Discover Collection</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner