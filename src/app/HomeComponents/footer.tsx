
import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="min-h-screen" >
            <div className="grid lg:grid-cols-2 grid-rows-2 justify-between items-center lg:gap-15 gap-20 h-110 lg:p-10 lg:pb-0">

                <div className=" flex flex-col  gap-5 ">
                    <h1 className="lg:text-[40px] text-[27px] font-semibold ">Lost in Choices? Let AI Be <br /> Your Guide</h1>
                    <span>Explore the smartest way to plan your education and <br className="lg:block hidden" /> career — all in one place.</span>
                    <button className="px-[24px] py-[10px] lg:w-[128px] w-27 mt-5 rounded-lg font-semibold text-white lg:text-base text-[12px] bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] border-t border-[#ffffff36] shadow-[0_0_11px_0_rgba(160,125,241,0.3)]  hover:opacity-90 transition-all duration-300">
                        Try It Now
                    </button>
                </div>
                <div className="relative w-full flex justify-center items-center">
                    {/* Glow Effect */}
                    <div className="absolute w-[130%] h-[130%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-15 rounded-full bg-[linear-gradient(90deg,#A07DF1,#F69DBA)] z-0" />

                    {/* Image Container */}
                    <div className="relative w-full rounded-lg lg:h-[400px] h-[200px] overflow-hidden bg-[#ffffff2f] flex justify-center p-[2px] z-10">
                        <img src="/footer.png" alt="img" className="rounded-lg lg:w-auto w-full" />
                    </div>
                </div>


            </div>

            <div className="lg:block relative hidden place-items-center scroll-none overflow-y-clip">
                <div className="absolute flex top-[75px] justify-between px-10 items-center w-full h-full">
                    
                    <img src="/croplogo.png" alt="logo" className='w-[550px]' />
                    
                    <div className="w-full text-white text-center py-4 bg-transparent">
                        <div className="flex justify-end items-center space-x-6 mb-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="w-7 h-7 hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX className="w-7 h-7 hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-7 h-7 hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                        <p className="text-[14px] text-white text-end">© 2025 alumna.ai. All rights reserved.</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="1512" height="423" viewBox="0 0 1514 400" fill="none">
                    <g filter="url(#filter0_ii_679_90)">
                        <path
                            d="M248.5 6.28176C231.026 7.70096 57.0741 30.2549 1 85.612V424H1513V57.413C1324.78 94.8717 1270.35 103.173 1116.43 116.228C1076.27 116.228 977.996 139.483 727 75.431L723.408 74.3451C510.419 9.94891 445.397 -9.71017 248.5 6.28176Z"
                            fill="white"
                            fillOpacity="0.01"
                        />
                    </g>
                    <path
                        d="M248.5 6.28176C231.026 7.70096 57.0741 30.2549 1 85.612V424H1513V57.413C1324.78 94.8717 1270.35 103.173 1116.43 116.228C1076.27 116.228 977.996 139.483 727 75.431L723.408 74.3451C510.419 9.94891 445.397 -9.71017 248.5 6.28176Z"
                        stroke="black"
                    />
                    <defs>
                        <filter
                            id="filter0_ii_679_90"
                            x="0.5"
                            y="0.5"
                            width="1513"
                            height="448"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.15 0"
                            />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_679_90" />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="24" />
                            <feGaussianBlur stdDeviation="24" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.08 0"
                            />
                            <feBlend mode="normal" in2="effect1_innerShadow_679_90" result="effect2_innerShadow_679_90" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="lg:hidden relative block place-items-center scroll-none overflow-y-clip mt-25 ">
                <div className="absolute flex justify-between top-[25px]  items-center w-full h-full">
                    
                    <img src="/croplogo.png" alt="logo" className='w-[180px]' />
                    
                    <div className="w-full text-white text-center py-4 bg-transparent">
                        <div className="flex justify-end items-center space-x-3 mb-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="w-[14px] h-[14px] hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                                <BsTwitterX className="w-[14px] h-[14px] hover:opacity-80 transition-opacity" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="w-[14px] h-[14px] hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                        <p className="text-[8px] text-white text-end">© 2025 alumna.ai. All rights reserved.</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="375" height="171" viewBox="0 0 375 171" fill="none">
                    <g filter="url(#filter0_ii_1459_4604)">
                        <path d="M60.7113 3.12133C56.3351 3.51631 12.9814 12.7559 -1 35.0035V170.999H376V23.6705C329.069 38.7249 333.878 37.7534 295.5 43C285.487 43 248.083 55.2419 185.5 29.5C131.679 3.27223 123 -2.50059 60.7113 3.12133Z" fill="white" fillOpacity="0.01" />
                    </g>
                    <path d="M60.7113 3.12133C56.3351 3.51631 12.9814 12.7559 -1 35.0035V170.999H376V23.6705C329.069 38.7249 333.878 37.7534 295.5 43C285.487 43 248.083 55.2419 185.5 29.5C131.679 3.27223 123 -2.50059 60.7113 3.12133Z" stroke="black" />
                    <defs>
                        <filter id="filter0_ii_1459_4604" x="-1.5" y="0.660156" width="378" height="194.839" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1459_4604" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="24" />
                            <feGaussianBlur stdDeviation="24" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.08 0" />
                            <feBlend mode="normal" in2="effect1_innerShadow_1459_4604" result="effect2_innerShadow_1459_4604" />
                        </filter>
                    </defs>
                </svg>
            </div>

        </div>
    )
}