"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Services } from './Services';

function HomeServices({workDetails}) {
    const [servicesVisible, setServicesVisible] = useState(false);
    // console.log(workDetails,"Home Services compo")
    useEffect(() => {
       
        const timer = setTimeout(() => setServicesVisible(true), 500);       
        return () => {
            clearTimeout(timer);         
        };
    }, []);
    return (
        <div>
            <div className={`text-center mb-16 transform transition-all duration-1000 ${servicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                    <span className="text-white">
                        Artistic Services
                    </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    From traditional calligraphy to modern digital art, each piece is crafted with passion and precision
                </p>
            </div>
            <Services useAt="home" workDetails={workDetails} />
            <Link href="/my-work" className="cursor-pointer mt-8 bg-gray-800 flex items-center justify-center w-40 mx-auto hover:text-gray-800 hover:bg-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">    <button className=''>View All</button> </Link>


        </div>
    )
}

export default HomeServices