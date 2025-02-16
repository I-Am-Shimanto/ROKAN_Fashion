import React from 'react'
import './bestseller.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CiHeart } from "react-icons/ci";
import { PiCopySimpleThin } from "react-icons/pi";
import { MdOutlineSearch } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdStar } from "react-icons/md";






const BestSeller = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        slidesToScroll: 4,
    initialSlide: 0,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div id="best_seller">
            <div className="container">
                <div className="row">
                    <h2 className='text-4xl font-semibold font-archivo text-black11 leading-[43px] text-center mb-1.5'>Our Bestsellers</h2>
                    <p className='text-base font-normal font-archivo text-second leading-6 text-center mb-10'>Unmatched design—superior performance and customer satisfaction in one.</p>
                    <Slider {...settings}>
                    <div className="seller_slider">
                        <div className="main_card">
                        <div className="single_card">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="gray w-6 h-6 rounded-[50%] bg-[rgba(123,75,57,0.6)] cursor-pointer"></div>
                                <div className="green w-6 h-6 rounded-[50%] bg-[rgba(0,128,128,0.6)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_two">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_three">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_four">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_five">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_six">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_seven">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="seller_slider flex justify-center">
                        <div className="main_card">
                        <div className="single_card_eight">
                            <CiHeart className='heart'/>
                            <PiCopySimpleThin className='copy'/>
                            <MdOutlineSearch className='search'/>
                            <button className='seller_btn flex items-center justify-center gap-0.5 text-base font-archivo font-normal text-black'><MdOutlineShoppingBag/> Add To Cart</button>
                        </div>
                        <div className="seller_text">
                            <h4 className='text-base font-archivo font-normal text-black11 leading-[18px] pt-4'>Long Sleeve Shirts</h4>
                            <div className="stars flex items-center gap-0.5 mt-1">
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                                <MdStar className='star text-amber-400'/>
                            </div>
                            <h5 className='text-base font-semibold font-archivo text-black11 leading-6 my-[5px]'>$210.00</h5>
                            <div className="colors flex items-center gap-1">
                                <div className="black w-6 h-6 rounded-[50%] bg-[rgba(0,0,0,0.75)] cursor-pointer"></div>
                                <div className="purple w-6 h-6 rounded-[50%] bg-[rgba(215,178,187,0.74)] cursor-pointer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    </>
  )
}

export default BestSeller