import React from 'react'
import './discover.css'
import { Link } from 'react-router-dom'

const Discover = () => {
  return (
    <>
        <div id="discover" className='mb-20'>
            <div className="container">
                <div className="row flex gap-6">
                    <div className="discover_img_one relative">
                        <div className="img">
                            <img src="images/discover1.png" alt="discover1" />
                        </div>
                        <div className="discover_text absolute bottom-[5%] left-[5%]">
                            <h3 className='text-[32px] font-semibold font-archivo text-white leading-[38px]'>Redefine Elegance</h3>
                            <p className='text-[15px] font-normal font-archivo text-white leading-[22.5px] max-w-[60%] my-[5px]'>Explore fashion that seamlessly combines classic
                            silhouettes with contemporary flair.</p>
                            <Link className='disc_link text-sm font-archivo font-normal text-white leading-[41px] '>DISCOVER COLLECTION</Link>
                        </div>
                    </div>
                    <div className="discover_img_one relative">
                        <div className="img">
                            <img src="images/discover2.png" alt="discover2" />
                        </div>
                        <div className="discover_text absolute bottom-[5%] left-[5%]">
                            <h3 className='text-[32px] font-semibold font-archivo text-white leading-[38px]'>Beyond Basics</h3>
                            <p className='text-[15px] font-normal font-archivo text-white leading-[22.5px] max-w-[60%] my-[5px]'>Transform your wardrobe with versatile staples designed
                            to make a statement, from day to night.</p>
                            <Link className='disc_link text-sm font-archivo font-normal text-white leading-[41px] '>DISCOVER COLLECTION</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Discover