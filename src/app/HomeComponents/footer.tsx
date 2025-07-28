
import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

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

            {/* pc footer */}
            <div className="lg:block relative hidden place-items-center scroll-none overflow-y-clip w-full">
                <div className="absolute flex place-items-center top-[75px] justify-between px-20 items-center w-full h-full">
                    <div>
                        <img src="/01logo.png" alt="logo" className='w-[950px] dark:block hidden' />
                        <img
                            src="/lightlogo.png"
                            alt="Logo"
                            className="block dark:hidden w-[950px]"
                        />
                    </div>


                    <div className="w-full dark:text-white text-black text-center py-4 mt-5 dark:mt-7 bg-transparent">
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
                        <p className="text-[14px] dark:text-white text-black text-end">© 2025 alumna.ai. All rights reserved.</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1514 400" fill="none" preserveAspectRatio="none" className="w-full h-auto dark:block hidden ">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1514 400" fill="none" preserveAspectRatio="none" className="w-full h-auto dark:hidden block ">
                    <path d="M248.155 5.28176C230.635 6.70096 56.2225 29.2549 0 84.612V423H1516V56.413C1327.28 93.8717 1272.71 102.173 1118.38 115.228C1078.11 115.228 979.581 138.483 727.921 74.431L724.319 73.3451C510.767 8.94891 445.573 -10.7102 248.155 5.28176Z" fill="url(#paint0_linear_1694_2276)" fillOpacity="0.5" />
                    <path d="M248.155 5.28176C230.635 6.70096 56.2225 29.2549 0 84.612V423H1516V56.413C1327.28 93.8717 1272.71 102.173 1118.38 115.228C1078.11 115.228 979.581 138.483 727.921 74.431L724.319 73.3451C510.767 8.94891 445.573 -10.7102 248.155 5.28176Z" fill="url(#paint1_radial_1694_2276)" />
                    <defs>
                        <linearGradient id="paint0_linear_1694_2276" x1="1.51381e-05" y1="64.625" x2="2326.41" y2="644.44" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00741203" stopColor="#8C67E2" />
                            <stop offset="0.09375" stopColor="#946DF0" />
                            <stop offset="0.536458" stopColor="#E87DB3" />
                            <stop offset="1" stopColor="#FFC899" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_1694_2276" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(758) rotate(90) scale(423 1516)">
                            <stop stopColor="white" stopOpacity="0.3" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            {/* mobile footer */}
            <div className="lg:hidden relative block place-items-center scroll-none overflow-y-clip mt-10 w-full">
                <div className="absolute flex justify-between top-[25px]  items-center w-full h-full px-5 ">

                    <div>
                        <img src="/footerlogo.png" alt="logo" className='w-[450px] dark:block hidden' />
                        <img src="/lightlogo.png" alt="Logo" className="block dark:hidden w-[450px]" />
                    </div>

                    <div className="w-full dark:text-white text-black text-center py-4 mt-5 bg-transparent ">
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
                        <p className="text-[8px] dark:text-white text-black text-end">© 2025 alumna.ai. All rights reserved.</p>
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 375 171"
                    fill="none"
                    className="w-full h-auto dark:block hidden "
                    preserveAspectRatio="none"
                >
                    <g filter="url(#filter0_ii_1459_4604)">
                        <path
                            d="M60.7113 3.12133C56.3351 3.51631 12.9814 12.7559 -1 35.0035V170.999H376V23.6705C329.069 38.7249 333.878 37.7534 295.5 43C285.487 43 248.083 55.2419 185.5 29.5C131.679 3.27223 123 -2.50059 60.7113 3.12133Z"
                            fill="white"
                            fillOpacity="0.01"
                        />
                    </g>
                    <path
                        d="M60.7113 3.12133C56.3351 3.51631 12.9814 12.7559 -1 35.0035V170.999H376V23.6705C329.069 38.7249 333.878 37.7534 295.5 43C285.487 43 248.083 55.2419 185.5 29.5C131.679 3.27223 123 -2.50059 60.7113 3.12133Z"
                        stroke="black"
                    />
                    <defs>
                        <filter
                            id="filter0_ii_1459_4604"
                            x="-1.5"
                            y="0.660156"
                            width="378"
                            height="194.839"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
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
                            <feBlend in2="shape" result="effect1_innerShadow_1459_4604" />
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
                            <feBlend
                                mode="normal"
                                in2="effect1_innerShadow_1459_4604"
                                result="effect2_innerShadow_1459_4604"
                            />
                        </filter>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 171"
                    fill="none"
                    className="w-full h-auto dark:hidden block"
                    preserveAspectRatio="none">
                    <g filter="url(#filter0_ii_2029_1716)">
                        <path d="M60.7113 2.12133C56.3351 2.51631 12.9814 11.7559 -1 34.0035V169.999H376V22.6705C329.069 37.7249 333.878 36.7534 295.5 42C285.487 42 248.083 54.2419 185.5 28.5C131.679 2.27223 123 -3.50059 60.7113 2.12133Z" fill="url(#paint0_linear_2029_1716)" fillOpacity="0.5" />
                        <path d="M60.7113 2.12133C56.3351 2.51631 12.9814 11.7559 -1 34.0035V169.999H376V22.6705C329.069 37.7249 333.878 36.7534 295.5 42C285.487 42 248.083 54.2419 185.5 28.5C131.679 2.27223 123 -3.50059 60.7113 2.12133Z" fill="url(#paint1_radial_2029_1716)" />
                    </g>
                    <defs>
                        <filter id="filter0_ii_2029_1716" x="-1" y="0.160156" width="377" height="193.838" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2029_1716" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="24" />
                            <feGaussianBlur stdDeviation="24" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.780392 0 0 0 0 0.827451 0 0 0 0 0.917647 0 0 0 0.08 0" />
                            <feBlend mode="normal" in2="effect1_innerShadow_2029_1716" result="effect2_innerShadow_2029_1716" />
                        </filter>
                        <linearGradient id="paint0_linear_2029_1716" x1="-0.999996" y1="26.1077" x2="599.169" y2="118.753" gradientUnits="userSpaceOnUse">
                            <stop offset="0.00741203" stopColor="#8C67E2" />
                            <stop offset="0.09375" stopColor="#946DF0" />
                            <stop offset="0.536458" stopColor="#E87DB3" />
                            <stop offset="1" stopColor="#FFC899" />
                        </linearGradient>
                        <radialGradient id="paint1_radial_2029_1716" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(187.5 0.160156) rotate(90) scale(169.838 377)">
                            <stop stopColor="white" stopOpacity="0.3" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

            </div>

        </div>
    )
}