"use client"
import React, { useEffect, useState } from 'react'

  const specialServices = [
    {
      title: 'Expertise & Experience',
      description: 'With over 4 years of professional experience in Arabic & English calligraphy, custom paintings, and bespoke art, I bring skill, precision, and creativity to every project. My clients trust me to transform their ideas into stunning, high-quality artworks.',
      icon: 'zap'
    },
    {
      title: 'Personalized & Unique Creations',
      description: 'Every piece is customized to reflect your vision, style, and story. From live calligraphy and murals to product painting and leather art, I ensure each artwork is one-of-a-kind, meaningful, and timeless.',
      icon: 'flame'
    },
    {
      title: 'Reliable & Client-Focused Service',
      description: 'I value your time and satisfaction. Offering prompt communication, professional guidance, and on-time delivery, I make the process smooth and enjoyable — whether for events, gifts, home décor, or branding projects in Riyadh.',
      icon: 'circle'
    }
  ];

function WhyClients() {
    const [aboutVisible, setAboutVisible] = useState(false);
    useEffect(() => {    
        const timer2 = setTimeout(() => setAboutVisible(true), 1000);
        return () => {     
            clearTimeout(timer2);
        };
    }, []);
    return (
        <div>
            <div className="myContainer">
                <div className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${aboutVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-white">
                        Why Clients Choose My Work
                    </h2>
                    {/* <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Advanced artistic techniques for unique and personalized creations
            </p> */}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {specialServices.map((service, index) => (
                        <div
                            key={index}
                            className={` bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-4 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 ${aboutVisible ? `translate-y-0 opacity-100 transition-all duration-700 delay-${index * 200}` : 'translate-y-20 opacity-0'}`}
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                <i className={`ri-${service.icon}-line text-2xl text-white`}></i>
                            </div>
                            <h3 className="text-center text-xl font-bold mb-4 text-white">{service.title}</h3>
                            <p className="text-left text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WhyClients