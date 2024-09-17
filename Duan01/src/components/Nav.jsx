import React, { useState } from 'react'
import { CgNametag } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";



const Nav = () => {
    const [toggle, setToggle] = useState(false);
    function openMenu() {
        setToggle(true);
    }
    function closeMenu() {
        setToggle(false);
    }

    return (
        <>
            <div className='flex items-center justify-between p-10 lg:flex-row'>
                <div className='text-white font-mono text-3xl tracking-wider flex items-center'>
                    <a href="" className='text-white font-mono text-3xl tracking-wider flex items-center' ><CgNametag />AUCODE</a>
                </div>
                <div className='space-x-4 font-mono'>
                    <div className=' ssm:hidden lg:block space-x-2'>
                        <a href="#" className='text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl'>Skills</a>
                        <a href="#" className='text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl'>Projects</a>
                        <a href="#" className='text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl'>Testtimonials</a>
                    </div>
                    <div className='ssm:block lg:hidden'>
                        {toggle ? (
                            <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
                        ) : <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer' />}

                    </div>
                </div>
            </div>
            <div className='ssm:block lg:hidden'>
                {toggle && (
                    <div>
                        <div className='flex justify-between ml-10'>
                            <ul>
                                <li className='text-white font-mono text-xl mb-2 cursor-pointer'>Skills</li>
                                <li className='text-white font-mono text-xl mb-2 cursor-pointer'>Projects</li>
                                <li className='text-white font-mono text-xl mb-2 cursor-pointer'>Testimonials</li>
                            </ul>
                        </div>
                    </div>
                )
                }

            </div>
        </>
    )
}

export default Nav
