"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function PassionData() {
        const [aboutVisible, setAboutVisible] = useState(false);
        useEffect(() => {    
            const timer2 = setTimeout(() => setAboutVisible(true), 1000);
            return () => {     
                clearTimeout(timer2);
            };
        }, []);
  return (
    <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${aboutVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-3xl sm:text-5xl font-bold">
                <span className="text-white">
                  Passion for
                </span>
                <br />
                <span className="text-white">Artistic Creation</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every stroke, every line, every color choice is a deliberate expression of creativity.
                I specialize in bringing traditional art forms into the modern world while preserving
                their authentic beauty and cultural significance.
              </p>
              <div className="space-y-4">
                {['Arabic & English Calligraphy', 'Digital Art Creation', 'Custom Illustrations'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
              <Link href="/" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors">
                <span>Learn More About My Journey</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${aboutVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <img
                  src="/images/profile-banner2.png"
                  alt="profile banner"


                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PassionData