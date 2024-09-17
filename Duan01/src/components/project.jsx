import React from 'react'
import ProjectImg from '../assets/img1.jpg'
import ProjectImg2 from '../assets/img2.jpg'
import ProjectImg3 from '../assets/img3.jpg'
import ProjectImg4 from '../assets/img4.jpg'

const Project = () => {
    return (
        <div className='bg-indigo-900 m-20 max-w-full'>
            <div className='grid justify-items-center m-10'>
                <h1 className='text-3xl text-white mt-10'>Project</h1>
            </div>
            <div>
                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className='max-w-md mx-auto bg-white 
                    rounded-xl shadow-md overflow-hidden 
                    md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-900 font-semibold'>
                                    Hospital Management System
                                </div>
                                <a href="#">Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima quam enim?
                                </p>
                            </div>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg2} alt="Project1" style={{ width: 150, height: 150 }} />
                            </div>
                        </div>

                    </div>
                    <div className='max-w-md mx-auto bg-white 
                    rounded-xl shadow-md overflow-hidden 
                    md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-900 font-semibold'>
                                    School Management System
                                </div>
                                <a href="#">Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima quam enim?
                                </p>
                            </div>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg} alt="Project1" style={{ width: 150, height: 150 }} />
                            </div>
                        </div>

                    </div>

                </div>
                <hr />
                <div className='grid grid-cols-2 gap-4 p-5'>
                    <div className='max-w-md mx-auto bg-white 
                    rounded-xl shadow-md overflow-hidden 
                    md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-900 font-semibold'>
                                    Pos Management System
                                </div>
                                <a href="#">Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima quam enim?
                                </p>
                            </div>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg3} alt="Project1" style={{ width: 150, height: 150 }} />
                            </div>
                        </div>

                    </div>
                    <div className='max-w-md mx-auto bg-white 
                    rounded-xl shadow-md overflow-hidden 
                    md:max-w-2xl hover:animate-pulse'>
                        <div className='md:flex'>
                            <div className='p-8'>
                                <div className='uppercase tracking-wide text-sm to-indigo-900 font-semibold'>
                                    Inventory Management System
                                </div>
                                <a href="#">Subheading</a>
                                <p className='mt-2 text-slate-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minima quam enim?
                                </p>
                            </div>
                            <div className='md:shrink-0 p-5'>
                                <img src={ProjectImg4} alt="Project1" style={{ width: 150, height: 150 }} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Project
