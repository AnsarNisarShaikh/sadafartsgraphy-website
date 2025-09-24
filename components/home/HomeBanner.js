"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function HomeBanner() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);     
    }, []);
    return (
        <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-2xl pt-12 sm:pt-16 sm:text-5xl font-bold mb-6 ">
                {/* bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent */}
                {/* <span className="text-white">
                    Creative
                </span>
                <br />
                <span className="text-white">Expression</span> */}
                <span className='font-halimun'>SadafArtsgraphy</span>
            </h1>
            <h2 className='text-xl sm:text-2xl my-2 font-semibold'>Artist/Calligrapher/Engraver</h2>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-8 max-w-3xl mx-auto sm:leading-relaxed">
                With a deep love for creativity and expression, I have dedicated my life to capturing
                the beauty and complexity of the world around us through various art forms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/my-work" className="bg-gray-800 hover:text-gray-800 hover:bg-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                    View My Work
                </Link>
                <Link href="/contact" className="shadow-lg border border-gray-100 hover:border-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800">
                    Get In Touch
                </Link>
            </div>
        </div>
    )
}

export default HomeBanner