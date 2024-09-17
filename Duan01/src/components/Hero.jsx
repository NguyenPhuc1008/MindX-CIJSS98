import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import HeroPic from '../assets/boy.jpg'


const Hero = () => {
    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5'>I'm</p>
                <h1 className='text-6xl'>PHUC NGUYEN</h1>
                <hr />
                <p className='mt-10 text-xl font-sans'>
                    The Front-end developer is the person who focuses on developing the Client Side,
                    in simple terms, focusing on the development of building interfaces and user experience,
                    responsible for developing the display and user experience for web applications.
                    The Front-end Developer is the one who determines the user's first view of the website,
                    providing a website that is easy to operate and use.

                </p>
            </div>
            <div className='w-1/3 items-center ssm:w-fit'>
                <img src={HeroPic} alt="" style={{
                    width: 500,
                    height: 500,
                }}
                    className='rounded-full w-full border-8 border-white' />
            </div>
            <div className='w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'>About Me</p>
                <p>
                    Let's build quality in programming ad design with our services
                </p>
                <button className='bg-white text-indigo-900 px-10 py-2 my-3 rounded-full hover:bg-indigo-900 hover:text-white'>
                    Show More
                </button>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <BsFacebook size={40} className='border-4 rounded-full hover:border-indigo-900'></BsFacebook>
                    <BsInstagram size={40} className='border-4 rounded-full hover:border-indigo-900'></BsInstagram>
                    <BsPinterest size={40} className='border-4 rounded-full hover:border-indigo-900'></BsPinterest>
                    <BsTwitter size={40} className='border-4 rounded-full hover:border-indigo-900'></BsTwitter>
                </div>
            </div>
        </section>
    )
}

export default Hero
