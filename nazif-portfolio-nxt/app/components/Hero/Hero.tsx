"use client"

import React from 'react';
import Typewriter from "typewriter-effect";
import MyAvatar from "@/app/components/Hero/MyAvatar";
import {VT323} from "@next/font/google";

const mono = VT323({subsets: ["latin"], weight: "400"});

const Hero = () => {
    return (
        <div>


            <div className={`flex flex-row w-full`}>
                <section className="ml-2 pl-12">
                    <div className="ml-2 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                        {/*${mono.className} --> This was for my old robotic text*/}
                        <h1 className={` mb-4 text-5xl font-bold tracking-tight leading-none text-gray-900 md:text-7xl lg:text-8xl dark:text-white `}>
                            <Typewriter
                                options={{
                                    strings: ["hey, I'm  nazif 👋"],
                                    autoStart: true,
                                    deleteSpeed: 1000000000,
                                    loop: false,


                                }}
                            />
                        </h1>
                        <p className="text-left mb-4 text-xl font-thin leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl dark:text-white">I
                            am a CS Major at UBC.
                            <br/>
                            Currently a <span
                                className="underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600">Product Manager</span> intern
                            at Broadridge
                            <br/>
                            I like to code for fun
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                            <a href="#"
                               className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Experience
                                <svg className="w-6 h-6 text-gray-800 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                     viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M12 19V5m0 14-4-4m4 4 4-4"/>
                                </svg>

                            </a>
                            <a href="#"
                               className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70">
                                Learn more
                            </a>
                        </div>
                    </div>
                </section>
                <MyAvatar/>


            </div>

        </div>
    );
};

export default Hero;