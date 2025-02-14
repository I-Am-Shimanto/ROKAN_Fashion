import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";





const Navbar = () => {
return (
<>
    <div className="navbar bg-transparent shadow-sm fixed top-0 left-0 z-50 p-5">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex={0} class="menu menu-sm dropdown-content bg-transparent rounded-box z-1 mt-3 w-52 p-2 shadow links">
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>HOME</Link></li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>SHOP</Link></li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>PRODUCT</Link></li>
                <li>
                    <details className='px-3 text-sm font-bold text-white bg-transparent font-archivo'>
                        <summary>PAGES</summary>
                        <ul className="p-2">
                            <li><Link>ABOUT US</Link></li>
                            <li><Link>BRAND</Link></li>
                            <li><Link>PORTFOLIO</Link></li>
                        </ul>
                    </details>
                </li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>BLOGS</Link></li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>CONTACT</Link></li>
                </ul>
            </div>
            <Link className="pl-5">
                <img className='w-[110px]' src="images/logo_white.png" alt="logo" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 links">
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>HOME</Link></li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>SHOP</Link></li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>PRODUCT</Link></li>
                <li>
                    <details className='px-3 text-sm font-bold text-white font-archivo bg'>
                        <summary>PAGES</summary>
                        <ul className="p-2 bg-transparent">
                            <li><Link>ABOUT US</Link></li>
                            <li><Link>BRAND</Link></li>
                            <li><Link>PORTFOLIO</Link></li>
                        </ul>
                    </details>
                </li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>BLOGS</Link></li>
                <li className='px-3 text-sm font-bold text-white font-archivo'><Link>CONTACT</Link></li>
            </ul>
        </div>
        <div className="navbar-end flex items-center gap-5 pr-5">
            <button className='text-3xl text-white'><IoIosSearch/></button>
            <Link className='log_in text-3xl text-white'><MdOutlineAccountBox/></Link>
            <Link className='wishlist text-3xl text-white'><CiHeart/></Link>
            <Link className='my_cart text-3xl text-white'><FaShoppingBag/></Link>
        </div>
    </div>
</>
)
}

export default Navbar