import React, { useState } from 'react';
import { FaBars, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { TbHomeCheck } from 'react-icons/tb'
import { IoPersonCircleOutline } from 'react-icons/io5';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <nav className='sticky top-0 z-50'>
            <div className='lg:block hidden bg-[#0ca39a] text-white py-2'>
                <div className='container mx-auto lg:flex hidden items-center justify-between px-3'>
                    <span className='flex items-center gap-x-1'>
                        <GoLocation />
                        <p className='text-sm'>01 Quang Trung - P.7 - Q. Go Vap</p>
                    </span>
                    <div className='flex items-center gap-x-4'>
                        <span className='flex items-center gap-x-1'>
                            <FaPhone />
                            <p>+1 206-214-2298</p>
                        </span>
                        <span className='flex items-center gap-x-1'>
                            <FaRegEnvelope />
                            <p>support@rezilla.com</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='container mx-auto flex flex-warp items-center justify-between px-3'>
                    <div >
                        <ul >
                            <li className='py-2 flex font-medium items-center leading-snug'>
                                <button className='bg-[#0ca39a] rounded-full px-4 py-1 hoverBtn flex'>HOME</button>
                            </li>
                            <li className='py-2 flex font-medium items-center leading-snug'>
                                <a href='#' to='/'>About</a>
                            </li>
                            <li className='py-2 flex font-medium items-center leading-snug'>
                                <a href='#' to='/'>Listings</a>
                            </li>
                            <li className='py-2 flex font-medium items-center leading-snug'>
                                <a href='#' to='/'>Services</a>
                            </li>
                            <li className='py-2 flex font-medium items-center leading-snug'>
                                <a href='#' to='/'>Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
