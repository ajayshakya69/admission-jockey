
import { Main } from 'next/document';
import React from 'react';
import MainFooter from '../(components)/mainFooter';

export default function Footer() {
    return (
        <div className="lg:min-h-screen" >
            <div className="grid lg:grid-cols-2 grid-rows-2 justify-between items-center lg:gap-15 gap-10 lg:h-110 lg:px-20 p-5">
                <div className=" flex flex-col  gap-5 ">
                    <h1 className="lg:text-[40px] text-[24px] dark:text-white text-black font-semibold ">Lost in Choices? Let AI Be <br className='lg:block hidden' /> Your Guide</h1>
                    <span className='lg:text-base text-sm dark:text-white text-black'>Explore the smartest way to plan your education and <br className="lg:block hidden" /> career — all in one place.</span>
                    <button className="px-[24px] py-[10px] lg:w-[128px] w-27 mt-5 rounded-lg font-semibold text-white lg:text-base text-[12px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] border-t border-[#ffffff36] shadow-[0_0_11px_0_rgba(160,125,241,0.3)]  hover:opacity-90 transition-all duration-300">
                        Try It Now
                    </button>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    {/* Glow Effect */}
                    <div className="absolute w-[130%] h-[130%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl dark:opacity-15 opacity-40 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] z-0" />

                    {/* Image Container */}
                    <div className="relative w-full rounded-lg lg:h-[400px] h-[200px] overflow-hidden dark:bg-[#ffffff2f] bg-[#00000042] flex justify-center p-[2px] z-10">
                        <img src="/footer.png" alt="img" className="rounded-lg  w-full " />
                    </div>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}