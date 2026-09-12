"use client"
import React from 'react'
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

function HomeAbout() {
    const [text] = useTypewriter({
        words: ["an Architect", "a Licensed Artist"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center py-10 sm:py-20">
                <div className='z-10'>
                    <p className='text-base mb-2 text-gray-300'>Hello! My name is</p>
                    <h1 className="font-extrabold mb-2 text-2xl text-gray-200 sm:text-5xl mx-auto  leading-10 sm:leading-16 tracking-wide">
                        <span className=" font-halimun">Sadaf Khan</span>
                    </h1>
                    <h2 className="text-2xl sm:text-4xl font-bold font-playwrite mb-2 text-gray-200">
                        <span>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="#ff014f"
                        />
                    </h2>

                    <div className="relative sm:hidden mt-5 sm:mt-0">
                        <Image
                            src="/images/sadaf.png"
                            alt="Sadaf Khan"


                            className="w-full h-[300px] sm:h-auto object-cover rounded-2xl shadow-2xl"
                            width={500}
                            height={600}
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                    </div>

                    <div className='text-base pt-7 sm:pt-2 space-y-2 text-gray-300'>
                        <p>
                            Passionate about transforming everyday objects into timeless works of art as a <strong>calligrapher in Riyadh</strong> and a <strong>live event artist</strong>. Specializing in <strong >live</strong>  and  <strong >studio calligraphy</strong>, <strong >engraving</strong>, and <strong >bespoke artwork customisation</strong>, I combine traditional craftsmanship with modern elegance across various mediums.
                        </p>
                        <p>
                            From <strong >jewellery illustration</strong>  and <strong >heat foiling </strong> to <strong >leather </strong> and <strong >product painting</strong>, my work spans across intimate keepsakes to large-scale <strong >mural paintings</strong>. Whether it&apos;s a <strong >hand-painted tote</strong>, <strong >watercolour art</strong>, or <strong >personalised embroidery</strong>, I infuse each piece with meaning, detail and beauty in my live event.
                        </p>
                        <p>
                            I also explore the art of <strong >silhouettes</strong>, <strong >origami</strong>, <strong >beadwork</strong>, and more—offering a truly personalised, handcrafted touch to every creation.
                        </p>
                    </div>
                    <ul className='my-2 space-y-1 text-gray-300'>
                        <span className='font-semibold'>Available for:</span>
                        <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Live Event Art & Activations</span></li>
                        <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Studio Commissions</span></li>
                        <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Luxury Brand Collaborations</span></li>
                        <li className='flex items-center space-x-3'> <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span> <span>Private Custom Orders</span></li>
                    </ul>
                    <p className='italic text-lg font-semibold text-gray-400'>Let&apos;s create something best and  meaningful together.</p>
                </div>
                <div className={`sm:block hidden `}>
                    <div className="relative">
                        <Image
                            src="/images/sadaf.png"
                            alt="Sadaf Khan"


                            className="w-full h-[300px] sm:h-[400px] lg:h-auto object-cover rounded-2xl shadow-2xl"
                            width={500}
                            height={600}
                        />
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeAbout