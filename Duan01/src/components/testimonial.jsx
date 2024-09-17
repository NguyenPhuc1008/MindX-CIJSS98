import React from 'react'
import T1 from '../assets/boy2.jpg'
import T2 from '../assets/boy3.png'
import T3 from '../assets/boy4.jpg'
import T4 from '../assets/boy5.jpg'

const Testimonial = () => {
    return (
        <div className='flex bg-indigo-900 m-20 ssm:flex-col lg:flex-row'>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
                gap-6 drak:bg-slate-800 dark:highlight-white/5'>
                    <img src={T1} alt="" className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                            Name Gose here

                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight
                        truncate dark:text-slate-400'>
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
                gap-6 drak:bg-slate-800 dark:highlight-white/5'>
                    <img src={T2} alt="" className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                            Name Gose here

                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight
                        truncate dark:text-slate-400'>
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
                gap-6 drak:bg-slate-800 dark:highlight-white/5'>
                    <img src={T3} alt="" className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                            Name Gose here

                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight
                        truncate dark:text-slate-400'>
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative rounded-xl overflow-auto p-8 hover:animate-pulse'>
                <div className='overflow-hidden relative max-w-md mx-auto bg-white 
                shadow-lg ring-1 ring-black/5 rounded-xl flex items-center
                gap-6 drak:bg-slate-800 dark:highlight-white/5'>
                    <img src={T4} alt="" className='absolute -left-6 w-28 h-28 rounded-full shadow-lg' />
                    <div className='min-w-0 py-5 pl-28 pr-5'>
                        <div className='text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200'>
                            Name Gose here

                        </div>
                        <div className='text-slate-500 font-medium text-sm sm:text-base leading-tight
                        truncate dark:text-slate-400'>
                            Assistant Manager
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial