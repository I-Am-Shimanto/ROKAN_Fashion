import React from 'react'
import './design.css'

const Design = () => {
  return (
    <>
      <div id="design" className='my-20'>
        <div className="container">
          <div className="row flex justify-between">
            <div className="img_one">
              <img src="images/design_1.png" alt="design_1" />
              <div className="design_one_text">
              <h3 className='text-base font-normal font-archivo text-white leading-6 text-center'>SAVE 30%—50% CLOTHING</h3>
              <h2 className='text-4xl font-semibold font-archivo text-white leading-[43px] mt-1 mb-5'>High—Top Design</h2>
              <p className='text-[15px] font-normal font-archivo text-white leading-6 text-center'>In-store! Limited time offer.</p>
              </div>
            </div>
            <div className="img_two">
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