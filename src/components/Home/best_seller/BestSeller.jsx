import React from 'react'
import './bestseller.css'
import { CiHeart } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";




const BestSeller = () => {
  return (
    <>
        <div id="best_seller">
            <div className="container">
                <div className="row">
                    <h2 className='text-4xl font-semibold font-archivo text-black11 leading-[43px] text-center mb-1.5'>Our Bestsellers</h2>
                    <p className='text-base font-normal font-archivo text-second leading-6 text-center mb-10'>Unmatched design—superior performance and customer satisfaction in one.</p>
                    <div className="seller_slider">
                        <div className="single_card">
                            <CiHeart className='heart'/>
                            <FaRegCopy className='copy'/>
                            <MdOutlineSearch className='search'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BestSeller